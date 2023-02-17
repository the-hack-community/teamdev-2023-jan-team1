class Api::V1::RegistrationsController < DeviseTokenAuth::RegistrationsController
  respond_to :json

  private
  def sign_up_params
    params.require(:registration).permit(:name, :email, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:registration).ermit(:name, :email, :password, :password_confirmation)
 end
end

