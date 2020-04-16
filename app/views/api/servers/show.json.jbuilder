server_channels = []
json.channels do
    @server.channels.each do |channel|
        server_channels << channel.id
        json.set! channel.id do 
            json.extract! channel, :id, :name, :server_id
        end
    end
end
users = []
json.users do 
    @server.users.each do |user|
        users << user.id
        json.set! user.id do
            json.extract! user, :id, :username
            json.image_url image_url(user.image_url)
        end
    end
end
json.server do 
    json.extract! @server, :id, :public, :admin_id, :name
    json.channels server_channels
    json.users users
    json.image_url image_url(@server.image_url)
end
json.currentUserId @current_user_id