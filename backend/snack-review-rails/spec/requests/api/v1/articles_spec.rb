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
    it "returns http success" do
      get "http://localhost:3001/api/v1/articles", params: {format: :jbuilder}
      request.headers['Accept'] = 'application/json'
      expect(response).to have_http_status(:success)     
    end
  end

  describe "showアクションのテスト" do
    it "ログインしていない時のリクエスト成功" do
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
    end
    it "ログインしている時のリクエスト成功（自分の投稿）" do
      get "http://localhost:3001/api/v1/articles/#{article.to_param}", params: {format: :jbuilder}, headers: token
      request.headers['Accept'] = 'application/json'
      expect(response).to have_http_status(:success)
      json = JSON.parse(response.body)
      
      binding.pry
      
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
    end
    it "returns http failed" do
      expect {get "http://localhost:3001/api/v1/articles/0"}.to raise_error(ActiveRecord::RecordNotFound)
    end
  end

  # describe "GET /create" do
  #   it "returns http success" do
  #     get "/api/v1/articles/create"
  #     expect(response).to have_http_status(:success)
  #   end
  # end

  # describe "GET /update" do
  #   it "returns http success" do
  #     get "/api/v1/articles/update"
  #     expect(response).to have_http_status(:success)
  #   end
  # end

  # describe "GET /destroy" do
  #   it "returns http success" do
  #     get "/api/v1/articles/destroy"
  #     expect(response).to have_http_status(:success)
  #   end
  # end

end
