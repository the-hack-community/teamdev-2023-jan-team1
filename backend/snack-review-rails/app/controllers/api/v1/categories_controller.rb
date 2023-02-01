class Api::V1::CategoriesController < ApplicationController
  def index
    categories = Category.all.order(id: :asc)
    render json: categories
  end
end
