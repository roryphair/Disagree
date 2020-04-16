@servers.each do |server|
    json.set! server.id do
        json.extract! server, :id, :public, :admin_id, :name
        json.image_url image_url(server.image_url)
      end
end