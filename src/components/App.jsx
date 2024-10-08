import React from "react";
import Card from "./Card";
import restaurants from "../restaurants";

function createCard(restaurant) {
  return (
    <Card
      key={restaurant.id}
      name={restaurant.name}
      img={restaurant.imgURL}
      tel={restaurant.phone}
      email={restaurant.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Restaurants</h1>
      {restaurants.map(createCard)}

      {/* <Card
        name={restaurants[0].name}
        img={restaurants[0].imgURL}
        tel={restaurants[0].phone}
        email={restaurants[0].email}
      />
      <Card
        name={restaurants[1].name}
        img={restaurants[1].imgURL}
        tel={restaurants[1].phone}
        email={restaurants[1].email}
      />
      <Card
        name={restaurants[2].name}
        img={restaurants[2].imgURL}
        tel={restaurants[2].phone}
        email={restaurants[2].email}
      /> */}
    </div>
  );
}

export default App;
