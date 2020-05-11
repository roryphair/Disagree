class Api::UsersController < ApplicationController
    IMAGES = ['users/chin.jpg','users/goat.jpg', 'users/iguana.jpg','users/lizard.jpg','users/otter.jpg','users/pom.jpg','users/sealion.jpg']
    
    def create
        @user = User.new(user_params)
        @user.image_url = IMAGES.sample
        if@user.save
            login!(@user)
            server =  Server.find_by(name: 'J Grobaners')
            rory = User.find_by(username: "Rory")
            DirectMessage.create(body: 'Hi Rory, nice to meet you!', author_id: @user.id, receiver_id: rory.id)
            DirectMessage.create(body: "Hey #{@user.username} welcome to Disagree, my discord clone! You can create/join servers. On servers you can create channels. You can chat in channels or by direct messaging. Messages can be editted/deleted by clicking on them. Enjoy!", author_id: rory.id, receiver_id: @user.id)
            ServerUser.create(user_id: @user.id, server_id: server.id, role: 'peon')
            render :show
        else
            render json: @user.errors, status: 404
        end
    end

    def show
        @user = User.find(params[:id])
        render :show
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end
