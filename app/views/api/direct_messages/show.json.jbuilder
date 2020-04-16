json.message do 
    json.extract! @direct_message, :id, :body, :created_at, :receiver_id
    json.user_id @direct_message.author_id
    json.updated_at @direct_message.updated_at.strftime("%m/%d/%Y %I:%M%p")
end
json.channelId @channel_id
if @user 
    json.user do 
        json.extract! @user, :id, :username
        json.image_url image_url(@user.image_url)
    end
end