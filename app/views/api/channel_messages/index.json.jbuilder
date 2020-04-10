
json.messages do 
    json.set! @channel_id do 
        json.array! @channel_messages, :id, :body, :user_id
    end
end