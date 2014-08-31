require 'spec_helper'
describe ApplicationController, :type => :controller do
  describe "GET STUFF" do
    it 'landing page loads' do
      get :index
      expect(response.status).to eq 200
    end

    # it 'creates a card without entering an address' do
    #   get :submit
    #   expect(response.status).to eq 500
    # end
  end
end
