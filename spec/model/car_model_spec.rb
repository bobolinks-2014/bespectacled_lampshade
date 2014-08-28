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
end

describe "fuel_cost" do
  let(:car){Car.create(city_mpg: 3, highway_mpg: 3)}
  let (:args){{gas_price: 2, distance: 6}}

  it {should respond_to(:hash)}

  it 'should return a float' do
    expect(car.fuel_cost(args)).to be_an_instance_of(Float)
  end
  it 'should return an answer with two decimal places' do
    expect(car.fuel_cost(args)).to eq(car.fuel_cost(args).round(2))
  end

  it "should calculate fuel_costs" do
    expect(car.fuel_cost(args)).to eq(4)
  end
end

describe "kilometers_to_miles" do
  let(:conversion){Car.kilometers_to_miles(10)}
  it 'should return a float' do
    expect(conversion).to be_an_instance_of(Float)
  end
  it 'should convert kilometers to miles' do
    expect(conversion).to eq(6.21)
  end
end
