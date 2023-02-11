module AuthorizationHelper
  def sign_in(user)
    post 'http://localhost:3001/api/v1/auth/sign_in', params: { email: user.email, password: user.password }
    # レスポンスのHeadersからトークン認証に必要な要素を抜き出して返す処理
    response.headers.slice('client', 'uid', 'token-type', 'access-token')
  end
end