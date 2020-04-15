json.extract! @direct_message, :id, :body, :created_at, :updated_at
json.user_id @direct_message.author_id
json.channelId @channel_id
if @user 
    json.user do 
        json.extract! @user, :id, :username, :image_url
    end
end