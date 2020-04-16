# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create!(username: 'Demo-Williams', password: '123456', email: 'demo@demo.com', image_url: 'users/lizard.jpg' )
User.create!(username: 'Rory', password: '12345678', email: 'rory@gmail.com', image_url: 'users/goat.jpg')
User.create!(username: 'Grape man', password: 'grapes', email: 'grapes@gmail.com', image_url: 'users/chin.jpg')
User.create!(username: 'Sally Long Dog', password: 'sallys', email: 'sally@gmail.com', image_url: 'users/pom.jpg')
User.create!(username: 'Protanicker', password: 'wizards', email: 'protan@gmail.com', image_url: 'users/iguana.jpg')
User.create!(username: 'Mexithon', password: 'niceones', email: 'mexithon@gmail.com', image_url: 'users/sealion.jpg')
User.create!(username: 'Jae', password: 'niceones', email: 'jae@gmail.com', image_url: 'users/jae.jpg')
User.create!(username: 'Groban', password: 'niceones', email: 'groban@gmail.com', image_url: 'users/groban.jpg')
users = User.all

Server.destroy_all
Server.create!(name: 'Spiritual Paddle Boarders', admin_id: User.second.id, public: true, image_url: 'servers/water.jpg' )
Server.create!(name: 'Leg Talking', admin_id: User.second.id, public: true, image_url: 'servers/road.jpg' )
Server.create!(name: 'J Grobaners',admin_id: User.second.id, public: true, image_url: 'servers/zen.jpg' )

Channel.destroy_all
Channel.create!(name: 'General', server_id: Server.first.id)
Channel.create!(name: 'General', server_id: Server.second.id)
Channel.create!(name: 'Frog Petting', server_id: Server.first.id)
Channel.create!(name: 'Pretzel Deals', server_id: Server.first.id)
Channel.create!(name: 'Dad Realizations', server_id: Server.first.id)
Channel.create!(name: 'The Grobes', server_id: Server.third.id)
Channel.create!(name: 'Lizard Appreciation', server_id: Server.third.id)
Channel.create!(name: 'Wild World of Wind', server_id: Server.third.id)
Channel.create!(name: 'Happy Mistakes', server_id: Server.third.id)
channels = Channel.all
ServerUser.destroy_all
ServerUser.create!(user_id: User.first.id, server_id: Server.first.id, role: 'admin')
ServerUser.create!(user_id: User.second.id, server_id: Server.first.id, role: 'peon')
ServerUser.create!(user_id: User.third.id, server_id: Server.first.id, role: 'peon')
ServerUser.create!(user_id: User.fourth.id, server_id: Server.first.id, role: 'peon')
ServerUser.create!(user_id: User.fifth.id, server_id: Server.first.id, role: 'peon')
ServerUser.create!(user_id: users[5].id, server_id: Server.first.id, role: 'peon')
ServerUser.create!(user_id: users[6].id, server_id: Server.first.id, role: 'peon')

ServerUser.create!(user_id: User.first.id, server_id: Server.second.id, role: 'admin')
ServerUser.create!(user_id: User.second.id, server_id: Server.second.id, role: 'peon')
ServerUser.create!(user_id: User.fourth.id, server_id: Server.second.id, role: 'peon')

ServerUser.create!(user_id: User.first.id, server_id: Server.third.id, role: 'admin')
ServerUser.create!(user_id: User.second.id, server_id: Server.third.id, role: 'peon')
ServerUser.create!(user_id: User.third.id, server_id: Server.third.id, role: 'peon')
ServerUser.create!(user_id: User.fourth.id, server_id: Server.third.id, role: 'peon')
ServerUser.create!(user_id: User.fifth.id, server_id: Server.third.id, role: 'peon')
ServerUser.create!(user_id: users[5].id, server_id: Server.third.id, role: 'peon')
ServerUser.create!(user_id: users[6].id, server_id: Server.third.id, role: 'peon')
ServerUser.create!(user_id: users[7].id, server_id: Server.third.id, role: 'peon')

ChannelMessage.destroy_all
ChannelMessage.create!(body: 'Hey I wanna go paddleboarding, who with me?', channel_id: Channel.first.id, user_id: User.first.id)
ChannelMessage.create!(body: 'Nah I think i am good, maybe just leave', channel_id: Channel.first.id, user_id: User.second.id)
ChannelMessage.create!(body: 'Yeah this is for real paddle boarders', channel_id: Channel.first.id, user_id: User.third.id)
ChannelMessage.create!(body: 'Not some fad like pogs', channel_id: Channel.first.id, user_id: User.third.id)
ChannelMessage.create!(body: "Hey guys, chill, he just doesn't  get it yet, the thrill of water and standing on it, its just too deep for him", channel_id: Channel.first.id, user_id: User.fourth.id)
ChannelMessage.create!(body: 'If we wanted to be kind and patient we would be paddle boarders, we stand on water. STAND ON IT. Get it, we do not sit on water and let it wait for us. We are masters of our own universe. Not mere snails, hiding inside of a shell', channel_id: Channel.first.id, user_id: User.third.id)
ChannelMessage.create!(body: "If he can't handle a little hazing, how will he handle it out there, on the water. You think you can stand up on a piece of wood on water if you cannot stand against the full force of human toxicity?", channel_id: Channel.first.id, user_id: User.second.id)
ChannelMessage.create!(body: 'You are right, I just am not cut out for this. I thought your hatred and anger was you lasing out at a world you cannot control but i see now it is a mechanism to protect me from the even crueler force, paddle boarding. I shall return in 14 days with a body ready to handle the pad until then, thanks for the lessons, thanks for the laughs, and most importantly, thanks for the chill vibes', channel_id: Channel.first.id, user_id: User.first.id)

ChannelMessage.create!(body: 'I wish my legs were bigger :(', channel_id: Channel.second.id, user_id: User.second.id)
ChannelMessage.create!(body: 'Me too but in some ways, small legs are a sign of elegance in the face of adversity', channel_id: Channel.second.id, user_id: User.fourth.id)
ChannelMessage.create!(body: "Yes, very wise. You ever go to rite aid?", channel_id: Channel.second.id, user_id: User.second.id)
ChannelMessage.create!(body: 'not really', channel_id: Channel.second.id, user_id: User.fourth.id)
ChannelMessage.create!(body: "Oh well then the rest of this conversation might not apply to you, but i already thought it so i might as well continue.", channel_id: Channel.second.id, user_id: User.second.id)
ChannelMessage.create!(body: "You ever go to rite-aid to buy pretzels and they have pretzels but...", channel_id: Channel.second.id, user_id: User.second.id)
ChannelMessage.create!(body: "they aren't the best pretzels, just mediocre ones.", channel_id: Channel.second.id, user_id: User.second.id)
ChannelMessage.create!(body: "but you already left the appartment and its a five floor walk up so you just settle for less and buy the pretzels?", channel_id: Channel.second.id, user_id: User.second.id)
ChannelMessage.create!(body: "Yeah your right that didn't apply to me", channel_id: Channel.second.id, user_id: User.fourth.id)

ChannelMessage.create!(body: "Hey guys, spotted a frog on 27th street, going to go pet it, who is with me?", channel_id: Channel.third.id, user_id: users[6].id)
ChannelMessage.create!(body: "Jae you have to stop, you are putting too much of yourself into this sport", channel_id: Channel.third.id, user_id: users[2].id)
ChannelMessage.create!(body: "I WONT STOP TILL I PET EVERY FROG", channel_id: Channel.third.id, user_id: users[6].id)
ChannelMessage.create!(body: "Jae it's okay, you don't need the frog pets, you are enough on your own, you have always been enough. Let it go, let go of everything, the pain, the past, the five dollar footlong, just let it go man, we love you.", channel_id: Channel.third.id, user_id: users[3].id)
ChannelMessage.create!(body: "but I just wanted to be a good person, to pet a frog and stand on the pinancle of human triumph. Instead, once again, i am frogless. like a commoner. Just makes me sad", channel_id: Channel.third.id, user_id: users[6].id)
ChannelMessage.create!(body: "We are here for you jae, just let it out. You can't hold it up inside, you gotta let it out, so that when you can pet frogs again, you can do it right. With all of your being, everything you have ever had", channel_id: Channel.third.id, user_id: users[2].id)
ChannelMessage.create!(body: "I can't wait for the day, to see you unchained, unbound by your past pain, just petting every frog you can see. It will be beautiful", channel_id: Channel.third.id, user_id: users[2].id)
ChannelMessage.create!(body: "It ain't about me, its about the frogs. but thanks man, wait I see another frog", channel_id: Channel.third.id, user_id: users[6].id)
ChannelMessage.create!(body: "....", channel_id: Channel.third.id, user_id: users[2].id)
ChannelMessage.create!(body: "let it go", channel_id: Channel.third.id, user_id: users[2].id)

ChannelMessage.create!(body: "Thanks for being my biggest fan. You Rock - Josh Groban ", channel_id: channels[5].id, user_id: users[7].id)
ChannelMessage.create!(body: "who me?", channel_id: channels[5].id, user_id: users[2].id)
ChannelMessage.create!(body: "no me, fight me you weak grober", channel_id: channels[5].id, user_id: users[1].id)
ChannelMessage.create!(body: "You probably dont even know his blood type", channel_id: channels[5].id, user_id: users[2].id)
ChannelMessage.create!(body: "Neither of you are worth your weight in jellybeans, a true grober like myself can expand my lungs to the size of a gorilla", channel_id: channels[5].id, user_id: users[3].id)
ChannelMessage.create!(body: "I miss you Groban, please come back to us", channel_id: channels[5].id, user_id: users[4].id)
ChannelMessage.create!(body: "Little late, but did he say who the biggest fan was?", channel_id: channels[5].id, user_id: users[5].id)
ChannelMessage.create!(body: "It was me. I wonder what jae thinks.", channel_id: channels[5].id, user_id: users[2].id)
ChannelMessage.create!(body: "Just want to put some frogs, any one down?", channel_id: channels[5].id, user_id: users[6].id)

DirectMessage.destroy_all
DirectMessage.create!(body: 'hey man i like grapes', author_id: User.third.id, receiver_id: User.first.id)
DirectMessage.create!(body: 'Nice, i like that', author_id: User.first.id, receiver_id: User.third.id)
DirectMessage.create!(body: 'Yeah bought a fresh batch from the street fruit man. Talking top of the line fruits. Perfectly round, purplish yellowish.', author_id: User.third.id, receiver_id: User.first.id)
DirectMessage.create!(body: 'Put them in my mouth and chomp on them all night, whew, hard to think of a more thrilling event in my life', author_id: User.third.id, receiver_id: User.first.id)
DirectMessage.create!(body: 'Maybe the birth of my third kid', author_id: User.third.id, receiver_id: User.first.id)
DirectMessage.create!(body: 'cool', author_id: User.first.id, receiver_id: User.third.id)


DirectMessage.create!(body: 'Woah its Rory, the make of this grey-tastic app', author_id: User.first.id, receiver_id: User.second.id)
DirectMessage.create!(body: "Hey Demo User, welcome to Disagree, my discord clone! You can create/join servers. On servers you can create channels. You can chat in channels or by direct messaging. Messages can be editted/deleted by clicking on them. Enjoy!", author_id: User.second.id, receiver_id: User.first.id)

DirectMessage.create!(body: 'It is I Mexithon, defender of the past, riddler of riddles and all around swell person', author_id: users[5].id, receiver_id: User.first.id)
DirectMessage.create!(body: 'Cool, whats your opinion of the future though', author_id: User.first.id, receiver_id: users[5].id)
DirectMessage.create!(body: 'oof was not expecting that to come up, uhhh I gotta go wax my boat', author_id: users[5].id, receiver_id: User.first.id)

DirectMessage.create!(body: "Hey my name is Jae, and I just love adventures. A big hero of mine is Akon, he is so neat. Want to go pet frogs later?", author_id: users[6].id, receiver_id: User.first.id)
DirectMessage.create!(body: 'Jae sure, I would love that', author_id: User.first.id, receiver_id: users[6].id)
DirectMessage.create!(body: "Yes, finally someone will be my friend, i can't wait, i have so many frogs i want to pet with you!", author_id: users[6].id, receiver_id: User.first.id)
DirectMessage.create!(body: "its been so long since someone has talked to me in such a pleasant manner, I just can't wait to pet frogs with you", author_id: users[6].id, receiver_id: User.first.id)
DirectMessage.create!(body: "hey we still petting frogs later?", author_id: users[6].id, receiver_id: User.first.id)
DirectMessage.create!(body: "So the frog petting still on?", author_id: users[6].id, receiver_id: User.first.id)
DirectMessage.create!(body: "frogs", author_id: users[6].id, receiver_id: User.first.id)
DirectMessage.create!(body: "...", author_id: users[6].id, receiver_id: User.first.id)
DirectMessage.create!(body: "f", author_id: users[6].id, receiver_id: User.first.id)
DirectMessage.create!(body: "r", author_id: users[6].id, receiver_id: User.first.id)
DirectMessage.create!(body: "o", author_id: users[6].id, receiver_id: User.first.id)
DirectMessage.create!(body: "g", author_id: users[6].id, receiver_id: User.first.id)
DirectMessage.create!(body: "s", author_id: users[6].id, receiver_id: User.first.id)
DirectMessage.create!(body: "...", author_id: users[6].id, receiver_id: User.first.id)
DirectMessage.create!(body: "FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS FROGS ", author_id: users[6].id, receiver_id: User.first.id)

