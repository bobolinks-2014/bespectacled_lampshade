class Car < ActiveRecord::Base

	def fuel_cost *args
		combined_mpg = (@city_mpg.to_f * 0.45) + (@highway_mpg.to_f * 0.55)
		gallons_per_mile = 1/combined_mpg
		gallons_per_trip = args[:miles] * gallons_per_mile
		cost_per_trip = args[:fuel_cost] * gallons_per_trip
	end
end
