require 'spec_helper'

feature 'directions display' do
  before do
    Car.create!(make: "Acura", model: "TL", year: "2007")
    submit_acura
  end
  context 'after user submitted information on landing page' do
    it 'should see a panel with google directions',:js => true  do
      expect(page).to have_css('div.adp')
    end

    it 'should see fare costs',:js => true do
      expect(page).to have_content("Fare Cost")
    end

    it 'should see monthly cost', :js => true do
      expect(page).to have_content("Monthly Cost")
    end

    it 'should see yearly cost', :js => true do
      expect(page).to have_content("Yearly Cost")
    end

    it 'should see a warning', :js => true do
      expect(page).to have_content("This feature is in beta")
    end
  end
end
