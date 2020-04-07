@servers.each do |server|
    json.set! server.id do
        json.extract! server, :id, :public, :admin_id, :image_url, :name
      end
    
end