@channels.each do |channel|
    json.set! channel.id do
        json.extract! channel, :name, :id
    end
end