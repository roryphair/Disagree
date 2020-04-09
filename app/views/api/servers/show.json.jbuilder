server_channels = []
json.channels do
    @server.channels.each do |channel|
        server_channels << channel.id
        json.set! channel.id do 
            json.extract! channel, :id, :name, :server_id
        end
    end
end
json.server do 
    json.extract! @server, :id, :public, :admin_id, :image_url, :name
    json.channels server_channels
end
