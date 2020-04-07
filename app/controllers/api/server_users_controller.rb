class Api::ServerUsers < ApplicationController

    def index

    end

    def create

    end

    def destroy

    end

    def server_user_params
        params.require(:server_user).permit(:user_id, :server_id, :role)
    end
end
