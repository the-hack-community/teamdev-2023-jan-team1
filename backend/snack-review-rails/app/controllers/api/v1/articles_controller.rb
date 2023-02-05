class Api::V1::ArticlesController < ApplicationController
  def index
    @popular_articles = Article.all
    @new_articles = Article.order(updated_at: :desc)
    render 'index'
  end

  def show
    @article = Article.find(params[:id])
    render 'show'
  end

  def create
    @article = Article.new(article_params)
    if @article.save
      head :created
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def update
    @article = Article.find(params[:id])

    if @article.update(article_params)
      head :no_content
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @article = Article.find(params[:id])
    if @article.discard
      head :no_content
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  private
  def user_params
    params.require(:article).permit(:content, :shops_information, :title, :url, :category_id).merge(image_url: @article.get_image_url, user_id: current_api_v1_user.id)
  end
end
