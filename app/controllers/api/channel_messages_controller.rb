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
                action: 'create'
            }
            ChannelMessagesChannel.speak(params[:channel_id], new_message.as_json)
            render :show
        else
            render json: @channel_message.errors.full_messages, status: 404
        end
    end

    def update
        @channel_message = ChannelMessage.find(params[:id]);
        if current_user.id == @channel_message.user_id 
            if @channel_message.update(channel_message_params)
                new_message = {
                    message: {
                        id: @channel_message.id,
                        user_id: @channel_message.user_id,
                        body: @channel_message.body,
                        created_at: @channel_message.created_at,
                        updated_at:  @channel_message.updated_at.strftime("%m/%d/%Y %I:%M%p"),
                        
                    },
                    channelId: @channel_message.channel_id,
                    action: 'update'
                }
                ChannelMessagesChannel.speak(@channel_message.channel_id, new_message.as_json)
                render :show
            else
                render json: @channel_message.errors.full_messages, status: 404
            end
        else
            render json: ["You cannot edit other user's messages"], status: 403
        end
    end

    def index
        @channel_messages = ChannelMessage.where(channel_id: params[:channel_id])
        @channel_id = params[:channel_id]
        render :index
    end

    def destroy
        @channel_message = ChannelMessage.find(params[:id]);
        if current_user.id == @channel_message.user_id 
            if @channel_message.destroy
                @channel_id = params[:channel_id]
                new_message = {
                    message: {
                        id: @channel_message.id,
                        user_id: @channel_message.user_id,
                        body: @channel_message.body,
                        created_at: @channel_message.created_at,
                        updated_at:  @channel_message.updated_at.strftime("%m/%d/%Y %I:%M%p"),
                        
                    },
                    channelId: @channel_message.channel_id,
                    action: 'delete'
                }
                
                ChannelMessagesChannel.speak(@channel_message.channel_id, new_message.as_json)
                render :show
            else
                render json: @channel_message.errors.full_messages, status: 404
            end
        else
            render json: ["You can't delete other user's messages"], status: 403
        end
    end

    private
    def channel_message_params
        params.require(:message).permit(:body)
    end
end