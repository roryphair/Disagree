
json.messages do 
    json.set! @channel_id do 
        json.array! @channel_messages, :id, :body, :user_id, :created_at, :updated_at
    end
end