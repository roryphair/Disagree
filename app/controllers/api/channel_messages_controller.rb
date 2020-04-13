class Api::ChannelMessagesController < ApplicationController
    def create
        @channel_message = ChannelMessage.new(channel_message_params);
        @channel_message.channel_id = params[:channel_id]
        @channel_message.user_id = current_user.id
        if @channel_message.save
            @channel_id = params[:channel_id]
            new_message = {
                message: {
                    id: @channel_message.id,
                    user_id: @channel_message.user_id,
                    body: @channel_message.body,
                    created_at: @channel_message.created_at,
                    updated_at:  @channel_message.updated_at.strftime("%m/%d/%Y %I:%M%p"),
                },
                channelId: @channel_id,
            }
            
            ChannelMessagesChannel.speak(params[:channel_id], new_message.as_json)
            render :show
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