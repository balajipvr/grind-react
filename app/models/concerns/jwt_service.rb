module JwtService
  extend ActiveSupport::Concern
  SECRET = Rails.application.secrets.secret_key_base

  def self.encode(payload)
    JWT.encode(payload, SECRET)
  end
  
  def self.decode(token)
    JWT.decode(token, SECRET)[0]
  end

end