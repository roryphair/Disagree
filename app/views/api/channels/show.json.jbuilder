channel_messages = [];

json.messages do 
    @channel.messages do |message|
        channel_messages << message.id
        json.set! message.id do
            json.extract! message, :id, :user_id, :body
        end
    end
end

json.channel do 
    json.extract! @channel, :id, :name
    json.messages channel_messages
end

