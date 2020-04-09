class Api::ChannelsController < ApplicationController
    def create
        @channel = Channel.new(channel_params);
        @channel.server_id = params[:server_id]
        if @channel.save
            render :show
        else
            render json: @user.errors.full_messages, status: 404
        end
    end

    def destroy
        @channel = Channel.find(params[:id]);
        if @channel.destroy
            render :show
        else
            render json: @channel.errors.full_messages, status: 404
        end

    end

    def index
        @channels = Channel.where(server_id: params[:server_id])
        render :index;
    end

    private
    def channel_params
        params.require(:channel).permit(:name)
    end
end