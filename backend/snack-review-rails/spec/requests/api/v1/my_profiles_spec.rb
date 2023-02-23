require 'rails_helper'

RSpec.describe "Api::V1::MyProfiles", type: :request do
  let(:user) { create(:user) }
  let(:category) { create(:category) }
  let(:article) { create(:article, user: user, category: category) }
  let(:token) { sign_in user } 

  describe "my-profileのテスト" do
    context 'ログインしていない時' do
      it 'showアクション失敗' do
    
        get "http://localhost:3001/api/v1/my-profile"
        expect(response).to have_http_status(:unauthorized)
      end
    end
    context 'ログインしている時' do
      it 'showアクション成功' do
        login_user = create(:user, email: 'test2@example.com')
        access_token = sign_in(login_user)
        get "http://localhost:3001/api/v1/my-profile",params: {format: :jbuilder}, headers: access_token
        expect(response).to have_http_status(:success)

      end
      
    end
  end
end
