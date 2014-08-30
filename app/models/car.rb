class Car < ActiveRecord::Base

  def fuel_cost(args)
    combined_mpg = (self.city_mpg.to_f * 0.45) + (self.highway_mpg.to_f * 0.55)
    gallons_per_trip = (args[:distance].to_i * 2) * (1/combined_mpg.to_f)
    cost_per_trip = ( args[:gas_price].to_f * gallons_per_trip ).round(2)
  end



  def name
    "#{self.year} #{self.make} #{self.model}"
  end
end
