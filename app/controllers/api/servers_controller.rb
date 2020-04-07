class Api::ServersController < ApplicationController

    def index 
        @servers = Server.find()
    end

    def create
        @server = Server.new(server_params);
        if @server.save
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def destroy

    end

    private

    def server_params
        params.require(:server).permit(:name, :admin_id, :image_url, :public)
    end
end
