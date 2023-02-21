require 'rails_helper'

RSpec.describe "Api::V1::Categories", type: :request do
  describe "GET /index" do
    it "returns http success" do
      get "http://localhost:3001/api/v1/categories"
      expect(response).to have_http_status(:success)
    end
  end

end
