class Calculation

  def self.kilometers_to_miles kilometers
    miles = ( kilometers * 0.621371 ).round(2)
  end

  def self.calculateMonthlyFare(steps)
    total = 0
    if steps.include?("Train")
      zone = self.findZone
      total += self.trainFare(zone);
    end
    if steps.include?("Subway" || "Bus")
      total += 100
    end
    total
  end

  def self.findZone
    'E'
  end

  def self.trainFare(zone)
    case zone
    when 'A'
      78
    when "B"
      85
    when "C"
      121
    when 'D'
      135
    when 'E'
      149.50
    when 'F'
      165
    else
      200
    end
  end
end
