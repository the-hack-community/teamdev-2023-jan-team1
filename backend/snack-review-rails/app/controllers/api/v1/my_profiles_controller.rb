class Api::V1::MyProfilesController < ApplicationController
  def index
    @user = User.first
    render json: user_json
  end

  private

  def user_json
    ActiveModelSerializers::SerializableResource.new(
      @user, serializer: UserSerializer, adapter: :json
    )
  end

  # def article_json
  #   ActiveModelSerializers::SerializableResource.new(
  #     @user.article.all, each_serializer: ArticleSerializer, adapter: :json
  #   ).serializable_hash
  # end

end
