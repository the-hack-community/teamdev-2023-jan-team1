class Api::V1::RegistrationsController < DeviseTokenAuth::RegistrationsController
  respond_to :json
  def create
    #build_resource
    #@resource['name']=params['name']
    #@resource.save
    binding.pry
    #render_create_success

    super 
  end 

  private
  def sign_up_params
    params.require(:registration).permit(:name,:email, :password, :password_confirmation)
  end

  def account_update_params
    params.require(:registration).permit(:name,:email, :password, :password_confirmation)
 end
end

