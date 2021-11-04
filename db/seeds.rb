# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
Topic.destroy_all
User.destroy_all

@admin = User.create!(first_name: 'Miguel', last_name: 'Galindo', username: 'migmig123', email: 'mig@mig.com', profile_picture: 'https://media-exp1.licdn.com/dms/image/C4D03AQGXOxkuDXdVvw/profile-displayphoto-shrink_800_800/0/1551993879466?e=1641427200&v=beta&t=JF-Qv3eH_O-h_Poi7DOgjhCR6lhwltw6oTMsHeKFB1w', password: 'mig12345')

puts "#{User.count} users created"

@first_topic = Topic.create!(name: 'La Liga')
@second_topic = Topic.create!(name: 'Enlgish Premier League')
@third_topic = Topic.create!(name: 'Champions League')
@fourth_topic = Topic.create!(name: 'Training Drills')
@fifth_topic = Topic.create!(name: 'World Cup')

puts "#{Topic.count} topics created"


    @first_post = Post.create!(title: Faker::Lorem.sentence(word_count: 3), picture:  'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec595d45f39760007b05c07%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D989%26cropX2%3D2480%26cropY1%3D74%26cropY2%3D1564', content: Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false), user: @admin, topic: @first_topic)



    @second_post = Post.create!(title: Faker::Lorem.sentence(word_count: 3), picture:  'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec595d45f39760007b05c07%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D989%26cropX2%3D2480%26cropY1%3D74%26cropY2%3D1564', content: Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false), user: @admin, topic: @second_topic)



    @third_post = Post.create!(title: Faker::Lorem.sentence(word_count: 3), picture:  'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec595d45f39760007b05c07%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D989%26cropX2%3D2480%26cropY1%3D74%26cropY2%3D1564', content: Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false), user: @admin, topic: @third_topic)


puts "#{Post.count} posts created"

Comment.create!(content_comment: Faker::Lorem.paragraph_by_chars(number: 256, supplemental: false), user:@admin, post: @first_post)

puts "#{Comment.count} comments created"