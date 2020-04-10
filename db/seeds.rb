# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!(username: 'demo-williams', password: '123456', email: 'demo@demo.com')
User.create!(username: 'rory', password: '123456', email: 'rory@gmail.com')
User.create!(username: 'grape man', password: '123456', email: 'grapes@gmail.com')

Server.destroy_all
Server.create!(name: 'spiritual paddle boarders', admin_id: User.first.id, public: true, image_url:'user_icon.png' )
Server.create!(name: 'Cool kids with legs', admin_id: User.second.id, public: true, image_url:'user_icon.png' )


Channel.destroy_all
Channel.create!(name: 'General', server_id: Server.first.id)
Channel.create!(name: 'General', server_id: Server.second.id)
Channel.create!(name: 'Frog Petting', server_id: Server.first.id)

ServerUser.destroy_all
ServerUser.create!(user_id: User.first.id, server_id: Server.first.id, role: 'admin')
ServerUser.create!(user_id: User.second.id, server_id: Server.first.id, role: 'peon')
ServerUser.create!(user_id: User.first.id, server_id: Server.second.id, role: 'admin')

ChannelMessage.destroy_all
ChannelMessage.create!(body: 'Hey I wanna go paddleboarding, who with me?', channel_id: Channel.first.id, user_id: User.first.id)
ChannelMessage.create!(body: 'Nah I think i am good, maybe just leave', channel_id: Channel.first.id, user_id: User.second.id)
ChannelMessage.create!(body: 'I want some fishes', channel_id: Channel.second.id, user_id: User.second.id)


DirectMessage.destroy_all
DirectMessage.create!(body: 'hey man i like grapes', author_id: User.third.id, receiver_id: User.first.id)
DirectMessage.create!(body: 'Nice, i like that', author_id: User.first.id, receiver_id: User.third.id)

