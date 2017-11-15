require 'tower_bridge_lifts'

class HomeController < ApplicationController
  def index
    gon.vapid_public_key = Base64.urlsafe_decode64(ENV['VAPID_PUBLIC_KEY']).bytes

    @bridge = TowerBridgeLifts::Base.new
  end
end
