class Api::V1::UsersController <  ApplicationController

  def update
    unless api_v1_user_signed_in? then
      render json: { }, status: :unauthorized 
      return 
    end 
    user = User.find(current_api_v1_user.id)
    if params.key?(:password)
      result=user.update_with_password(user_params)
    else
      result=user.update_without_password(user_params)
    end

    if result
      render json: { message: 'User updated successfully.' }, status: :ok
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.permit(:name,:password,:current_password)
  end
end
