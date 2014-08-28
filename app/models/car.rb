class Car < ActiveRecord::Base

  def fuel_cost(args)
    combined_mpg = (self.city_mpg.to_f * 0.45) + (self.highway_mpg.to_f * 0.55)
    gallons_per_trip = args[:distance].to_i * 1/combined_mpg.to_f
    cost_per_trip = ( args[:gas_price].to_f * gallons_per_trip ).round(2)
  end

  def self.kilometers_to_miles kilometers
    miles = ( kilometers * 0.621371 ).round(2)
  end
end
