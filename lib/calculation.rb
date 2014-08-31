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
      78.25
    elsif distance < 10
      85.50
    elsif distance < 15
      121.00
    elsif distance < 20
      135.25
    elsif distance < 25
      149.50
    elsif distance < 30
      163.75
    elsif distance <  35
      178.00
    elsif distance < 40
      192.25
    elsif distance < 45
      206.50
    elsif distance < 50
      220.75
    elsif distance < 55
      235.00
    else
      263.50
    end
  end
end
