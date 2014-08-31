class Calculation

  def self.kilometers_to_miles kilometers
    miles = ( kilometers * 0.621371 ).round(2)
  end

  def self.calculateMonthlyFare(steps, distance)
    total = 0
    p distance
    if steps.include?("Train")
      total += self.trainFare(distance);
    end
    if steps.include?("Subway" || "Bus")
      total += 100
    end
    total
  end


  def self.trainFare(distance)
    if distance < 5
      78
    elsif distance < 10
      85
    elsif distance < 15
      121
    elsif distance < 20
      135
    elsif distance < 25
      149.50
    elsif distance < 30
      165
    elsif distance <  35
      200
    else
      0
    end
  end
end
