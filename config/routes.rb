Rails.application.routes.draw do
  post '/push', to: 'push#push'
  get '/push_again', to: 'push#push_again'

  root to: 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
