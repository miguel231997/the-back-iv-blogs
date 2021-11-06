Rails.application.routes.draw do
  resources :comments
  resources :posts do 
    resources :comments, only: :create
  end
  resources :topics, only: :index
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  resources :users, only: :create
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
