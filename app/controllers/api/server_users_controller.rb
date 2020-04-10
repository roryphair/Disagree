class Api::ServerUsersController < ApplicationController

    def create
        @server_user = ServerUser.new()
        @server_user.role = 'peon'
        @server_user.server_id = Server.find_by(name: params[:server_name]).id
        @server_user.user_id = current_user.id
        if@server_user.save
            @server = Server.find(@server_user.server_id)
            render 'api/servers/show'
        else
            render json: @server_user.errors.full_messages, status: 404
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
