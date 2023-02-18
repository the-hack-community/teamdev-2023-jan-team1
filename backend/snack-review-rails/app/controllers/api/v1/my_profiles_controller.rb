class Api::V1::MyProfilesController < ApplicationController
  def index
    @users = User.all
    @articles = Article.all
    render 'index'
  end

  private



end
