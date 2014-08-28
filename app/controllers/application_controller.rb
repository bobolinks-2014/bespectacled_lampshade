class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def index
    @make = Car.order("make").select("make").distinct(true).pluck("make")
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


end
