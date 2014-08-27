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

describe "fuel_costs" do
  let(:car){Car.new}

  it {should respond_to(:hash)}

  it 'should return a float' do
    args = {gas_price: 2, distance:5.13, mpg:3}
    expect(car.fuel_costs(args)).to be_an_instance_of(Float)
  end
  it 'should return an answer with two decimal places' do
    args = {gas_price: 2, distance:5.13, mpg:3}
    expect(car.fuel_costs(args)).to eq(car.fuel_costs(args).round(2))
  end
end
