class Api::DirectMessagesController < ApplicationController
    def create
        @direct_message = DirectMessage.new(direct_message_params);
        @direct_message.author_id = current_user.id
        @direct_message.receiver_id = params[:user_id]
        if @direct_message.save
            @channel_id = channelLogic(@direct_message.author_id, @direct_message.receiver_id)
            new_message = {
                message: {
                    id: @direct_message.id,
                    user_id: @direct_message.author_id,
                    body: @direct_message.body,
                    created_at: @direct_message.created_at,
                    updated_at:  @direct_message.updated_at.strftime("%m/%d/%Y %I:%M%p"),
                },
                channelId: @channel_id,
            }
            ChannelMessagesChannel.speak(@channel_id , new_message.as_json)
            render :show
        else
            render json: @direct_message.errors.full_messages, status: 404
        end
    end

    def channelLogic(id1, id2)
        if(id1 < id2)
            return "dm#{id1}-#{id2}"
        else
            return "dm#{id2}-#{id1}"
        end
    end

    def create_first
        @user = User.find_by(username: params[:message][:username])
        if @user
            @direct_message = DirectMessage.new(direct_message_params);
            @direct_message.author_id = current_user.id
            @direct_message.receiver_id = @user.id
            if @direct_message.save
                @channel_id = channelLogic(@direct_message.author_id, @direct_message.receiver_id)
                render :show
            else
                render json: @direct_message.errors.full_messages, status: 404
            end
        else
            render json: ['That user does not exist'], status: 404
        end
    end


    def index
        @messages = DirectMessage.where("author_id = ? OR author_id = ?", params[:user_id], current_user.id).where("receiver_id = ? OR receiver_id = ?", params[:user_id], current_user.id )
        @id = channelLogic(params[:user_id].to_i, current_user.id) 
        render :index
    end

    def update
        @direct_message = DirectMessage.find(params[:id]);
        if @direct_message.author_id == current_user.id
            if @direct_message.update(direct_message_params)
                @channel_id = channelLogic(@direct_message.author_id, @direct_message.receiver_id)
                new_message = {
                    message: {
                        id: @direct_message.id,
                        user_id: @direct_message.author_id,
                        body: @direct_message.body,
                        created_at: @direct_message.created_at,
                        updated_at:  @direct_message.updated_at.strftime("%m/%d/%Y %I:%M%p"),
                    },
                    channelId: @channel_id,
                }
                ChannelMessagesChannel.speak(@channel_id , new_message.as_json)
                render :show
            else
                render json: @direct_message.errors.full_messages, status: 404
            end
        else
            render json: ["You cannot edit other user's messages"], status: 403
        end
    end

    def destroy
        @direct_message = DirectMessage.find(params[:id]);
        if current_user.id == @direct_message.author_id
            if @direct_message.destroy
                @channel_id = channelLogic(@direct_message.author_id, @direct_message.receiver_id)
                new_message = {
                    message: {
                        id: @direct_message.id,
                        user_id: @direct_message.author_id,
                        body: @direct_message.body,
                        created_at: @direct_message.created_at,
                        updated_at:  @direct_message.updated_at.strftime("%m/%d/%Y %I:%M%p"),
                    },
                    channelId: @channel_id,
                    action: 'delete'
                }
                ChannelMessagesChannel.speak(@channel_id, new_message.as_json)
                render :show
            else
                render json: @direct_message.errors.full_messages, status: 404
            end
        else
            render json: ["You can't delete other user's messages"], status: 403
        end
    end

    private
    def direct_message_params
        params.require(:message).permit(:body)
    end
end