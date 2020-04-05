class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user.nil?
            render json: [ 'Invalid username or password'], status: 422 
        else
            login!(@user)
            render 'api/users/show'
        end
    end

    def destroy
        if logged_in?
            logout!
            render json: {}
        else 
            render json: ['You cannot log out if you are not logged in first'],  status: 404
        end
    end


end
