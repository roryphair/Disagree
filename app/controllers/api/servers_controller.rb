class Api::ServersController < ApplicationController
    def index
        @servers = Server.all
        render :index
    end

    def create
        @server = Server.new(server_params);
        if @server.save
            ServerUser.create!(user_id: @server.admin_id, server_id: @server.id, role: 'admin')
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def destroy

    end

    def show 
        @server = Server.find(params[:id])
        render :show
    end

    private

    def server_params
        params.require(:server).permit(:name, :admin_id, :image_url, :public)
    end
end
