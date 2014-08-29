class Google

  def self.calculate_distance(start_addr, destination_addr)
    address1 = start_addr.gsub(" ", "+").gsub(",", "")
    address2 = destination_addr.gsub(" ", "+").gsub(",", "")
    uri = URI("http://maps.googleapis.com/maps/api/distancematrix/json?origins=#{address1}&destinations=#{address2}&mode=auto")
    response_data = JSON.parse(Net::HTTP.get(uri))
    kilometers = (response_data["rows"][0]["elements"][0]["distance"]['text']).gsub(" km", '').to_f
    miles = ( kilometers * 0.621371 ).round(2)
  end

end


Eidle
