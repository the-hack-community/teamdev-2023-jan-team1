class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include ActionController::MimeResponds
  before_action :snakeize_params
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  # Snakeize JSON API request params
  def snakeize_params
    params.deep_snakeize!
  end
  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
end
