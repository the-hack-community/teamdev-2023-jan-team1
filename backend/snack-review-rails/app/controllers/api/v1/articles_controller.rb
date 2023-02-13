require 'open_graph_reader'
class Api::V1::ArticlesController < ApplicationController
  impressionist actions:[:show]
  before_action :alert_authorize, only: ['create', 'update', 'destroy']
  def index
    @popular_articles = Article.order(impressions_count: 'DESC').limit(5)
    @new_articles = Article.order(updated_at: "DESC")   
    render 'index'
  end

  def show
    @article = Article.find(params[:id])
    impressionist(@article, nil, unique: [:session_hash]) 
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
    if different_user?
      head :unauthorized
    elsif @article.update(article_params)
      head :no_content
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @article = Article.find(params[:id])
    if different_user?
      head :unauthorized
    elsif @article.discard
      head :no_content
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end

  private
  def article_params
    params.permit(:content, :title, :url).merge(shops_information: params[:shops_information], category_id: params[:category_id], image_url: image_url(params[:url]), user_id: current_api_v1_user.id)
  end
  def image_url(url)
    meta_info = OpenGraphReader.fetch(url)
    if (meta_info.respond_to?(:og, true) && meta_info.og.respond_to?(:image, true) && meta_info.og.image.respond_to?(:url)) 
      return meta_info.og.image.url
    else
      return nil
    end
  end
  def alert_authorize
    head :unauthorized unless api_v1_user_signed_in?
  end
  def different_user?
    current_api_v1_user.id != @article.user_id
  end
end
