import express from "express";
import myJson from "./db/movies.json" assert { type: "json" };
import fs from "fs";

let data = JSON.parse(fs.readFileSync("./db/movies.json")); //convert json to js object
// console.log(data);

const app = express();
const PORT = "5000";

app.use(express.json());
//-----------------------------------------------------------
const findMovies = (id) => {
  return data.find((movies) => movies.id === +id);
};

const deleteMovies = (req, res) => {
  const { id } = req.params;
  data = data.filter((movies) => movies.id !== +id); //Inserts all the values ​​in the data that do not have the same id
  fs.writeFileSync("./db/movies.json", JSON.stringify(data)); //convert js object to json
  res.status(201).send(`User with id ${id} has been deleted`);
};

const addMovies = (req, res) => {

  data = [...data, newItem]; //add a new object to data
  fs.writeFileSync("./db/movies.json", JSON.stringify(data)); //convert js object to json
  res.status(201).send(`movie has been added`);
};


// const change =  myJson.map(obj => {
//     if (obj.id == 1) {
//     return {obj, title: 'fffffff'};
//     }
//     return obj;
//     })




//myJson

const editMovies = (req, res) => {
 
  fs.writeFileSync("./db/movies.json", JSON.stringify(data)); //convert js object to json
  res.status(201).send(`User with id ${id} has been edited`);
};

// let newItem = {
//   id: 10,
//   title: "Crocodile Dundee",
//   year: "1986",
//   runtime: "97",
//   director: "Peter Faiman",
//   actors: "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
//   plot: "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
//   posterUrl:
//     "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg",
// };

//-----------------------------------------------------------
app.get("/", (req, res) => {
  res.send(data);
});

app.get("/movies", (req, res) => {
  res.send(myJson);
});

app.get("/movies/:id", (req, res) => {
  const { id } = req.params;
  const movies = findMovies(id);
  if (!movies) {
    res.status(404).send("no movies found");
  } else {
    res.status(200).send(movies);
  }
});

app.delete("/movies/:id", deleteMovies);

app.put("/movies/:id", editMovies);

app.post("/movies/", addMovies);

app.listen(PORT, () => {
  console.log("server is up on port" + PORT);
});
