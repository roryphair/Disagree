Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:create, :index, :show, :destroy] do 
      resources :channels, only: [:create, :destroy, :index]
    end
    resources :channels, only: [:destroy, :show] do 
      resources :channel_messages, only: [:create]
    end
    
    resources :direct_messages, only: [:create, :destroy]
    resources :channel_messages, only: [:destroy]
  end
end
