module ApplicationCable
  class Connection < ActionCable::Connection::Base
    # indentified_by :current_user

    # def Connection
    #   self.current_user = find_verified_user
    # end

    # private
    # def find_verified_user
    #  if verified_user = User.find_by(session_token: session[:session_token])
    #   verified_user
    #  else
    #   reject_unauthorized_connection
    #  end
    # end
  end
end
