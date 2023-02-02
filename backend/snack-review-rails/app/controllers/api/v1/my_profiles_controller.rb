class Api::V1::MyProfilesController < ApplicationController
  def index
    @user = User.first
    # @user = User.find(params[:id])
    render json: user_json.merge(article_json)
  end

  private

  def user_json
    ActiveModelSerializers::SerializableResource.new(
      @user, serializer: UserSerializer, adapter: :json
    ).serializable_hash
  end

  def article_json
    ActiveModelSerializers::SerializableResource.new(
      @user.article.all, each_serializer: ArticleSerializer, adapter: :json
    ).serializable_hash
  end

end
