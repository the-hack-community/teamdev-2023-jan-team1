require 'rails_helper'

RSpec.describe "Api::V1::Articles", type: :request do
  let(:user) { create(:user) }
  let(:category) { create(:category) }
  let(:article) { create(:article, user: user, category: category) }
  let(:token) { sign_in user } 

  describe "OGP画像のURL取得のテスト" do
    let(:instance) {Api::V1::ArticlesController.new}
    describe "image_urlの呼び出し1" do
      subject { instance.send(:image_url, 'http://www.rikuro.co.jp/') }
      it('りくろーおじさんのHPはOGP画像が取得できる') {
        expect(subject).to eq('http://www.rikuro.co.jp/img/ogpimage.jpg')
      }
    end
    describe "image_urlの呼び出し2" do
      subject { instance.send(:image_url, 'http://abehiroshi.la.coocan.jp/') }
      it('阿部寛のHPはOGP画像が取得できない') {
        expect(subject).to eq(nil)
      } 
    end
  end

  describe "indexアクションのテスト" do
    context "ログインしていない時" do
      it "ログインしていない時のリクエスト成功" do
        index_user = create(:user)
        index_category = create(:category)
        create_list(:article, 10, user: index_user, category: index_category)
        get "http://localhost:3001/api/v1/articles", params: {format: :jbuilder}
        request.headers['Accept'] = 'application/json'
        json_array = JSON.parse(response.body)
        json_array['popularArticles'].each do |json|
          expect(json).to have_key 'title'
          expect(json).to have_key 'content'
          expect(json).to have_key 'categoryName'
          expect(json).to have_key 'categoryColor'
          expect(json).to have_key 'shopsInformation'
          expect(json).to have_key 'url'
          expect(json).to have_key 'imageUrl'
          expect(json).to have_key 'userName'
          expect(json['allowEditFlag']).to eq false
          expect(json).to have_key 'createdAt'
          expect(json).to have_key 'updatedAt'
        end
        json_array['newArticles'].each do |json|
          expect(json).to have_key 'title'
          expect(json).to have_key 'content'
          expect(json).to have_key 'categoryName'
          expect(json).to have_key 'categoryColor'
          expect(json).to have_key 'shopsInformation'
          expect(json).to have_key 'url'
          expect(json).to have_key 'imageUrl'
          expect(json).to have_key 'userName'
          expect(json['allowEditFlag']).to eq false
          expect(json).to have_key 'createdAt'
          expect(json).to have_key 'updatedAt'
        end
        expect(response).to have_http_status(:success)
      end
    end
    context "ログインしている時" do
      it "ログインしている時のリクエスト成功" do
        index_user = create(:user)
        another_user = create(:user, email: 'test1@example.com')
        index_category = create(:category)
        index_token = sign_in(index_user)
        # 自分の書いた記事の数が一致しているか
        create_list(:article, 3, user: index_user, category: index_category)
        create_list(:article, 7, user: another_user, category: index_category)
        get "http://localhost:3001/api/v1/articles", params: {format: :jbuilder}, headers: index_token
        request.headers['Accept'] = 'application/json'
        json_array = JSON.parse(response.body)
        own_polular_articles_count = 0
        own_new_articles_count = 0
        json_array['popularArticles'].each do |json|
          own_polular_articles_count += 1 if json['allowEditFlag']
        end
        json_array['newArticles'].each do |json|
          own_new_articles_count += 1 if json['allowEditFlag']
        end
        expect(response).to have_http_status(:success)
        expect(own_polular_articles_count).to eq 3
        expect(own_new_articles_count).to eq 3 
      end
    end
  end
    
  describe "showアクションのテスト" do
    it "ログインしていない時のリクエスト成功" do
      before_page_view_count = article.impressions_count
      get "http://localhost:3001/api/v1/articles/#{article.to_param}", params: {format: :jbuilder}
      request.headers['Accept'] = 'application/json'
      expect(response).to have_http_status(:success)
      json = JSON.parse(response.body)
      expect(json).to have_key 'title'
      expect(json).to have_key 'content'
      expect(json).to have_key 'categoryName'
      expect(json).to have_key 'categoryColor'
      expect(json).to have_key 'shopsInformation'
      expect(json).to have_key 'url'
      expect(json).to have_key 'imageUrl'
      expect(json).to have_key 'userName'
      expect(json['allowEditFlag']).to eq false
      expect(json).to have_key 'createdAt'
      expect(json).to have_key 'updatedAt'
      after_page_view_count = Article.find(article.to_param).impressions_count
      expect(after_page_view_count).to eq (before_page_view_count + 1)
    end
    it "ログインしている時のリクエスト成功（自分の投稿）" do
      before_page_view_count = article.impressions_count
      get "/api/v1/articles/#{article.to_param}", params: {format: :jbuilder}, headers: token
      request.headers['Accept'] = 'application/json'
      expect(response).to have_http_status(:success)
      json = JSON.parse(response.body)
      expect(json).to have_key 'title'
      expect(json).to have_key 'content'
      expect(json).to have_key 'categoryName'
      expect(json).to have_key 'categoryColor'
      expect(json).to have_key 'shopsInformation'
      expect(json).to have_key 'url'
      expect(json).to have_key 'imageUrl'
      expect(json).to have_key 'userName'
      expect(json['allowEditFlag']).to eq true
      expect(json).to have_key 'createdAt'
      expect(json).to have_key 'updatedAt'
      after_page_view_count = Article.find(article.to_param).impressions_count
      expect(after_page_view_count).to eq (before_page_view_count + 1)
    end
    it "存在しないidでshowアクション失敗" do
      expect {get "http://localhost:3001/api/v1/articles/0"}.to raise_error(ActiveRecord::RecordNotFound)
    end
  end

  describe 'createアクションのテスト' do
    context 'ログインしていない時' do
      it 'createアクション失敗' do
        create_user = create(:user)
        create_category = create(:category)
        create_article = create(:article, user: create_user, category: create_category)
        post_count = Article.count
        post "http://localhost:3001/api/v1/articles", params: { article: create_article }
        expect(response).to have_http_status(:unauthorized)
        expect(Article.count).to eq post_count
      end
    end
    context 'ログインしている時' do
      it 'createアクション成功' do
        create_user = create(:user, email: 'test2@example.com')
        create_category = create(:category)
        create_token = sign_in(create_user)
        post_count = Article.count
        post "http://localhost:3001/api/v1/articles", params: { title: 'test title', content: 'test content', category_id: create_category.id, url: 'http://www.rikuro.co.jp/' }, headers: create_token
        created_article = Article.order(created_at: :desc).first
        expect(created_article.image_url).to eq('http://www.rikuro.co.jp/img/ogpimage.jpg')
        expect(response).to have_http_status(:created)
        expect(Article.count).to eq post_count + 1 
      end
      it 'createアクション失敗' do
        create_user = create(:user, email: 'test2@example.com')
        create_category = create(:category)
        create_token = sign_in(create_user)
        post_count = Article.count
        post "http://localhost:3001/api/v1/articles", params: { title: nil, content: 'test content', category_id: create_category.id }, headers: create_token
        expect(response).to have_http_status(:unprocessable_entity)
        expect(Article.count).to eq post_count
      end
    end
  end

  describe 'updateアクションのテスト' do
    context 'ログインしていない時' do
      it 'updateアクション失敗' do
        update_user = create(:user, email: 'test3@example.com')
        update_category = create(:category)
        update_token = sign_in(update_user)
        post "http://localhost:3001/api/v1/articles", params: { title: 'test title', content: 'test content', category_id: update_category.id }, headers: update_token
        target_id = Article.order(created_at: :desc).first.id
        patch "http://localhost:3001/api/v1/articles/#{target_id}", params: { title: 'test title 2', }
        expect(response).to have_http_status(:unauthorized)
      end
    end
    context 'ログインしている時' do
      it 'updateアクション成功' do
        create_user = create(:user, email: 'test4@example.com')
        create_category = create(:category)
        create_token = sign_in(create_user)
        post "http://localhost:3001/api/v1/articles", params: { title: 'test title', content: 'test content', category_id: create_category.id }, headers: create_token
        target_article = Article.order(created_at: :desc).first
        patch "http://localhost:3001/api/v1/articles/#{target_article.id}", params: { title: 'test title 2', content: 'test content', category_id: create_category.id }, headers: create_token
        expect(response).to have_http_status(:no_content)
      end
      it '別のユーザーでのupdateアクションは失敗' do
        create_user = create(:user, email: 'test4@example.com')
        create_category = create(:category)
        create_token = sign_in(create_user)
        post "http://localhost:3001/api/v1/articles", params: { title: 'test title', content: 'test content', category_id: create_category.id }, headers: create_token
        sign_out(create_user)
        target_article = Article.order(created_at: :desc).first
        another_user = create(:user, email: 'test5@example.com')
        another_token = sign_in(another_user)
        patch "http://localhost:3001/api/v1/articles/#{target_article.id}", params: { title: 'test title 2', content: 'test content', category_id: create_category.id }, headers: another_token
        expect(response).to have_http_status(:unauthorized)
      end
      it 'バリデーションエラーでのupdateアクション失敗' do
        create_user = create(:user, email: 'test4@example.com')
        create_category = create(:category)
        create_token = sign_in(create_user)
        post "http://localhost:3001/api/v1/articles", params: { title: 'test title', content: 'test content', category_id: create_category.id }, headers: create_token
        target_article = Article.order(created_at: :desc).first
        patch "http://localhost:3001/api/v1/articles/#{target_article.id}", params: { title: '', content: 'test content', category_id: create_category.id }, headers: create_token
        expect(response).to have_http_status(:unprocessable_entity)
      end
      it "存在しないidでupdateアクション失敗" do
        update_user = create(:user, email: 'test4@example.com')
        update_token = sign_in(update_user)
        expect {patch "http://localhost:3001/api/v1/articles/0", headers: update_token}.to raise_error(ActiveRecord::RecordNotFound)
      end
    end
  end

  describe 'destroyアクションのテスト' do
    context 'ログインしていない時' do
      it 'destroyアクション失敗' do
        update_user = create(:user, email: 'test5@example.com')
        update_category = create(:category)
        update_token = sign_in(update_user)
        post "http://localhost:3001/api/v1/articles", params: { title: 'test title', content: 'test content', category_id: update_category.id }, headers: update_token
        target_id = Article.order(created_at: :desc).first.id
        delete "http://localhost:3001/api/v1/articles/#{target_id}"
        expect(response).to have_http_status(:unauthorized)
      end
    end
    context 'ログインしている時' do
      it 'destroyアクション成功' do
        create_user = create(:user, email: 'test6@example.com')
        create_category = create(:category)
        create_token = sign_in(create_user)
        post "http://localhost:3001/api/v1/articles", params: { title: 'test title', content: 'test content', category_id: create_category.id }, headers: create_token
        target_article = Article.order(created_at: :desc).first
        delete "http://localhost:3001/api/v1/articles/#{target_article.id}", headers: create_token
        expect(response).to have_http_status(:no_content)
      end
      it '別のユーザーでのdestroyアクションは失敗' do
        create_user = create(:user, email: 'test6@example.com')
        create_category = create(:category)
        create_token = sign_in(create_user)
        post "http://localhost:3001/api/v1/articles", params: { title: 'test title', content: 'test content', category_id: create_category.id }, headers: create_token
        sign_out(create_user)
        target_article = Article.order(created_at: :desc).first
        another_user = create(:user, email: 'test5@example.com')
        another_token = sign_in(another_user)
        delete "http://localhost:3001/api/v1/articles/#{target_article.id}", headers: another_token
        expect(response).to have_http_status(:unauthorized)
      end
      it '存在しないidでdestroyアクション失敗' do
        create_user = create(:user, email: 'test4@example.com')
        create_token = sign_in(create_user)
        expect {delete "http://localhost:3001/api/v1/articles/0", headers: create_token}.to raise_error(ActiveRecord::RecordNotFound)
      end
    end
  end
end
