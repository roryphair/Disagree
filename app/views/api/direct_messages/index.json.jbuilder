json.messages do 
    @messages.each do |message|
        json.set! message.id do
            json.id  message.id
            json.body  message.body
            json.user_id  message.author_id
            json.created_at  message.created_at
            json.updated_at  message.updated_at.strftime("%m/%d/%Y %I:%M%p")
        end
    end
end
