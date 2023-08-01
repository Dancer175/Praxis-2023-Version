Rails.application.routes.draw do
  root to: 'pages#home'
  get 'info', to: 'pages#info'
  get 'treffpunkt', to: 'pages#treffpunkt'
  get 'kontakt', to: 'pages#kontakt'
end
