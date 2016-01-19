# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Todo.destroy_all
t1 = Todo.create!(title: "Title1", body: "Body1")
t2 = Todo.create!(title: "Title2", body: "Body2")
t3 = Todo.create!(title: "Title3", body: "Body3")
