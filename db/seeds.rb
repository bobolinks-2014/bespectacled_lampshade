
require 'csv'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

CSV.foreach('db/vehicles.csv', :headers => true) do |record|
	Car.create(make: record["make"], model: record["model"], year: record["year"], city_mpg: record["city08U"], highway_mpg: record["highway08U"])
end





