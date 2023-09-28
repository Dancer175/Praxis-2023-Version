Rails.application.routes.draw do
  root to: 'pages#home'
  get 'therapies', to: 'pages#therapies'
  get 'whoami', to: 'pages#whoami'
  get 'contact', to: 'pages#contact'
  get 'prices', to: 'pages#prices'
  get 'philosophy', to: 'pages#philosophy'
  get 'projects', to: 'pages#projects'
end
