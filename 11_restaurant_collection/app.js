// 1.1)  db.restaurants.find({})
// 1.2)  db.restaurants.find({cuisine:"pizza"})
// 1.3)  db.restaurants.find({kosher:"true"})
// 1.4)  db.restaurants.find({"address.city":"netivot"})
// 1.5)  db.restaurants.find({"address":{city:"netivot",street:"fox-geem"}})
// 1.6)  db.restaurants.find({"cordinates":[-55.666,13.445]})
// 1.7)  db.restaurants.find().sort({restaurantName:1})
// 1.8)  db.restaurants.find().sort({"address.city":1})
// 1.9)  db.restaurants.updateOne({restaurantName:"papagaio"},{$set:{restaurantName:"meat for meet"},})
// 1.10) db.restaurants.findOneAndUpdate({restaurantName:"me-so"},{$push:{reviews:{date4:"05/05/2021",grade:8},}})
// 1.11) db.restaurants.updateMany({kosher:false},{$set:{kosher:true}})
// 1.13) db.restaurants.deleteOne({restaurantName:"me-so"}) 
// 1.14) db.restaurants.deleteMany({kosher:false})

//2.1) db.restaurants.find().forEach(function(resName){print("name:"+resName.restaurantName)})
//2.2) db.restaurants.find().forEach(function(resCity){print("city:"+resCity.address.city)})
//2.3)  db.restaurants.find().forEach(function(resCity){print("cordinates:"+resCity.cordinates)}) 

