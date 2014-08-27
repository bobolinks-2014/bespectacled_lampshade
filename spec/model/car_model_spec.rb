require 'spec_helper'

describe 'car' do
  let(:car){Car.new}
  it 'should return a car object, class Car' do
    expect(car).to be_a(Car)
  end

  it 'should have a :make attribute' do
    expect(car).to respond_to(:make)
  end

  it 'should have a :model attribute' do
    expect(car).to respond_to(:model)
  end

  it 'should have a :year attribute' do
    expect(car).to respond_to(:year)
  end

  it 'should convert kilometers to miles' do
    expect(Car.kilometers_to_miles(10)).to eq(6.21)
  end




end

describe 'calculate fuel cost method' do
  let(:car){Car.new}
  it 'should calulate fuel costs per day' do
    expect(Car).to respond_to(:fuel_costs).with(3).arguments
  end
end
