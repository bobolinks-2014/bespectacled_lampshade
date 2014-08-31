def submit_acura
  visit root_path
  fill_in("starting_point", with: "351 W. Hubbard, Chicago IL")
  fill_in('destination', with: "633 Folsom Street, San Francisco, CA")
  select "Acura", from: 'make'
  select "TL", from: 'model'
  select "2007", from: 'year'
  click_button("submit")
end
