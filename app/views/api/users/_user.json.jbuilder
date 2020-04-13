server_list = []
json.servers do 
    user.servers.each do |server|
        server_list << server.id
        json.set! server.id do
            json.extract! server, :name, :id, :admin_id
            json.image_url asset_path("#{server.image_url}")
        end
    end
end

dms= {}

json.currentUser user.id
json.users do 
    user.received_users.each do |user2|
        dms[user2.id] = true
        json.set! user2.id do
            json.extract! user, :id, :username, :image_url
        end
    end  
    user.messaged_users.each do |user2|
        dms[user2.id] = true
        json.set! user2.id do
            json.extract! user2, :id, :username, :image_url
        end
    end
    json.set! user.id do
        json.extract! user, :id, :username, :email 
        json.image_url asset_path("#{user.image_url}")
        json.servers server_list
        json.users_dmed dms
    end
    

end
