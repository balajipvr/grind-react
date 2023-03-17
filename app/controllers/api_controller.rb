class ApiController < ApplicationController
  before_action :authenticate_request!


  def customer_data
  	respond_to do |format|
  		format.json { render json: {"message": "Valid User", code: 200}}
  	end
  end

  private

  def authenticate_request!
    token = request.headers['Authorization']
    user_token = JwtService.decode(token.split(' ')[1])
  end
end