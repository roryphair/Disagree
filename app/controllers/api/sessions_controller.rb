class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            if(User.exists?(email: params[:user][:email]))
                render json: {password: 'Incorrect Password.'}, status: 422 
            else
                render json: {email: 'Email Not Found'}, status: 422
            end
        else 
            @servers = @user.servers
            login!(@user)
            render 'api/users/show'
        end
    end

    def destroy
        if logged_in?
            logout!
            render json: {}
        else 
            render json: ['You need to be logged in to log out.'],  status: 404
        end
    end


end
