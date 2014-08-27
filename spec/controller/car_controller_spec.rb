require 'spec_helper'

describe "CarsController" do
  it 'landing page loads' do
    get :index
    expect(response.status).to eq 200
  end
end
