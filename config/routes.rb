Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'events#index'

  # get 'customers', to: 'events#index'
  get 'bye_world', to: 'events#index'
  post 'sessions', to: 'sessions#create'
  get 'validate', to: 'api#customer_data'
  get '*path', to: 'events#index', via: :all
end
