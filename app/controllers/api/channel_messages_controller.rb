class Api::ChannelMessagesController < ApplicationController
    def create
        @channel_message = ChannelMessage.new(channel_message_params);
        @channel_message.channel_id = params[:channel_id]
        @channel_message.user_id = current_user.id
        if @channel_message.save
            @channel_messages = ChannelMessage.where(channel_id: params[:channel_id])
            @channel_id = params[:channel_id]
            render :index
        else
            render json: @channel_message.errors.full_messages, status: 404
        end
    end

    def index
        @channel_messages = ChannelMessage.where(channel_id: params[:channel_id])
        @channel_id = params[:channel_id]
        render :index
    end

    def destroy
        @channel_message = ChannelMessage.find(params[:id]);
        if @channel_message.destroy
            render :show
        else
            render json: @channel_message.errors.full_messages, status: 404
        end
    end

    private
    def channel_message_params
        params.require(:message).permit(:body)
    end
end