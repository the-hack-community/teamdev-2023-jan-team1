class Api::V1::MyProfilesController < ApplicationController
  def show
    if api_v1_user_signed_in? then
      @user = User.find(current_api_v1_user.id)
      @articles = Article.order(updated_at: "DESC").where(user_id: current_api_v1_user.id)
      render 'index',status: :ok
    else 
      render json: { }, status: :unauthorized
    end
  end
  private
end
