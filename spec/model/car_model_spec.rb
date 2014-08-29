require 'spec_helper'

describe "Car" do
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
  let(:car){Car.new(city_mpg: 3, highway_mpg: 3)}
  let (:args){{gas_price: 2, distance: 6}}
  # it {should respond_to(:hash)}

  it 'should return a float' do
    expect(car.fuel_cost(args)).to be_an_instance_of(Float)
  end
  it 'should return an answer with two decimal places' do
    expect(car.fuel_cost(args)).to eq(car.fuel_cost(args).round(2))
  end

  it "should calculate fuel_costs" do
    expect(car.fuel_cost(args)).to eq(8)
  end
end
