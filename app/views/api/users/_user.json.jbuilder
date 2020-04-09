server_list = []
json.servers do 
    user.servers.each do |server|
        server_list << server.id
        json.set! server.id do
            json.extract! server, :name, :id
            json.image_url asset_path("#{server.image_url}")
        end
    end
end

dms= {}
user.dms_authored.each do |dm|
    dms[dm] = true
end
user.dms_received.each do |dm|
    dms[dm] = true
end


json.user do 
    json.extract! user, :id, :username, :email, :image_url
    json.servers server_list
    json.users_dmed dms
end
