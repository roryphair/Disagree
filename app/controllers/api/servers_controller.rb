class Api::ServersController < ApplicationController
    IMAGES = ['servers/canyon.jpg','servers/road.jpg', 'servers/sky.jpg','servers/tundra.jpg','servers/water.jpg','servers/zen.jpg']
    
    def index
        @servers = User.find(current_user.id).servers
        render :index
    end

    def create
        @server = Server.new(server_params);
        @server.admin_id = current_user.id
        @server.image_url = IMAGES.sample
        if @server.save
            ServerUser.create!(user_id: @server.admin_id, server_id: @server.id, role: 'admin')
            Channel.create!(server_id: @server.id, name: 'General')
            @current_user_id = current_user.id
            render :show
        else
            render json: @server.errors.full_messages, status: 404
        end
    end

    def destroy
        @server = Server.find(params[:id]);
        if @server.admin_id == current_user.id 
            if @server.destroy
                render json: @server.id
            else
                render json: @server.errors.full_messages, status: 404
            end
        else 
            render json: ['Only the admin of a server can delete it'], status: 403
        end
    end

    def show 
        @server = Server.find(params[:id])
        @current_user_id = current_user.id
        render :show
    end

    private

    def server_params
        params.require(:server).permit(:name, :image_url, :public)
    end
end
