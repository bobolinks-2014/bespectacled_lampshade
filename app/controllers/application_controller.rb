  # TODO: If A user fails to provide a response, it errors out. We need error handling or the ability to add all cars from 2003
  # TODO: Use gas API
class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  WORK_MONTH = 23
  WORK_YEAR = 280
  def index
    @make = Car.order("make").select("make").distinct(true).pluck("make")
  end

  def public_transit
    distance = Google.calculate_distance(params[:starting_point], params[:destination])
    return_value = params[:steps].nil? ? "Walking only" : Calculation.calculateMonthlyFare(params[:steps], distance)
    if request.xhr?
      render :json => return_value
    end

  end

  def get_model
    # params = selected make
    # find all models associated with selected make
    @make = params[:chosen_make]
    @return_value = Car.where(make: @make).order("model").distinct(true).pluck("model")
    if request.xhr?
      render :json => @return_value
    end
  end

  def get_model_year
    @model = params[:chosen_model]
    @return_value = Car.where(model: @model).order("year").distinct(true).pluck("year")
    if request.xhr?
      render :json => @return_value
    end
  end

  def submit
    p params
    distance = Google.calculate_distance(params[:starting_point], params[:destination])
    car = Car.where(make: params[:make], model: params[:model], year: params[:year]).first
    fuel_cost = car.fuel_cost({distance: distance, gas_price: params[:gas_price]})
    name = car.name
    # fare = public_transit(params[:steps], distance)
    return_value = {name: name ,distance: distance, monthly_cost: (fuel_cost*WORK_MONTH).round(2), yearly_cost: (fuel_cost*WORK_YEAR).round(2), city_mpg: car.city_mpg, hwy_mpg: car.highway_mpg }
    if request.xhr?
      render :json => return_value
    end
  end
end
