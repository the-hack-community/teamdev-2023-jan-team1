class Api::V1::ArticlesController < ApplicationController
  def index
    render json: {'name': 'test'}
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
    @article = Article.find(params[:id])
    if @article.discard
      head :no_content
    else
      render json: @article.errors, status: :unprocessable_entity
    end
  end
end
