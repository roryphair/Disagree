# @channel_messages.each do |message|
#     message.updated_at = message.updated_at.strftime(" %m/%d%Y %I:%M %p")
# end
json.messages do 
    json.set! @channel_id do 
        json.array! @channel_messages do |message|
            json.id  message.id
            json.body  message.body
            json.user_id  message.user_id
            json.created_at  message.created_at
            json.updated_at  message.updated_at.strftime("%m/%d/%Y %I:%M%p")
        end
    end
end
