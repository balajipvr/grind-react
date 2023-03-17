class User < ApplicationRecord
require 'bcrypt'

 	def authenticate(user_email, password)
	  user = User.find_by(email: user_email)
	  if user && user.password_digest
	    user
	  else
	    nil
	  end
	end
end