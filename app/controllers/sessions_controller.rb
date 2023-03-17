class SessionsController < ApplicationController
	skip_before_action :verify_authenticity_token  
  def create
    user = User.find_by(email: params[:email])
    if user&.authenticate(params[:email],params[:password])
      token = JwtService.encode(user_id: user.id)
      render json: { token: token ,code: 'Success'}, status: 200
    else
      render json: { error: 'Invalid email or password',code: 404 }, status: :unprocessable_entity
    end
  end
end