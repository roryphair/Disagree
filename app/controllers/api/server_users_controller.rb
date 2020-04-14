class Api::ServerUsersController < ApplicationController

    def create
        @server_user = ServerUser.new()
        @server_user.role = 'peon'
        server = Server.find_by(name: params[:server_name])
        @server_user.server_id = server.id if server
        @server_user.user_id = current_user.id
        if@server_user.save
            @current_user_id = @server_user.user_id
            @server = Server.find(@server_user.server_id)
            render 'api/servers/show'
        else
            render json: ["Can't find that server, Sorry."], status: 404
        end
    end

    def destroy
        @server_user = ServerUser.where(user_id: params[:user_id], server_id: params[:server_id]).first;
        if @server_user.destroy
            render json: @server_user.server_id
        else
            render json: @server_user.errors.full_messages, status: 404
        end
    end

    def server_user_params
        params.require(:server_user).permit(:user_id, :server_id, :role)
    end
end
