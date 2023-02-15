module AuthorizationHelper
  def sign_in(user)
    post 'http://localhost:3001/api/v1/auth/sign_in', params: { email: user.email, password: user.password }
    response.headers.slice('client', 'uid', 'token-type', 'access-token')
  end
  def sign_out(user)
    delete 'http://localhost:3001/api/v1/auth/sign_out'
  end
end