json.message do 
    json.extract! @channel_message, :id, :body, :user_id
end
json.channelId @channel_id