import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import fishes from "../sample-fishes";
import FishDisplay from "./FishDisplay";
import base from "../base";

class App extends React.Component {

  // always give state its default empty behavior
  state = {
    fishes: {},
    order: {}
  };

  // once we involved firebase, we started playing with the lifecycle methods
  componentDidMount() {
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.storeId}/fishes`);
  }

  // state and how it gets populated live in the same component
  // This function has to be accessed 2 levels deeper in the createFishForm component so how 
  // do we get it there? How we get anything into a component - PROPS
  createFish = (fish) => {

    // Now... how do we get this fish into state?
    // You never reach into state directly! You take a copy of the existing state 
    // and then modify it directly.

    // 1. Take a copy of existing state
    const fishes = { ...this.state.fishes };

    // 2. Add our new fish to the copy of state
    fishes[`fish${Date.now()}`] = fish;

    // 3. Set the new fishes object to state
    this.setState({
      fishes: fishes
    });

    // In JS6 if the variable is the same name as the property, you can just do this:
    // this.setState({ fishes });
  };

  addToOrder = (fishKey) => {
    // The object order in state is very simple. It holds a key and a value that's incremented
    // every time the "add to order" button is clicked for that key (fish). Looks like this:
    // fish1: 1
    // fish2: 4
    // fish108465544: 1

    // This method is then passed into the FishDisplay component

    // And then into the Order component we pass the order object being held in state
    // AND we pass the fishes object so we can use the key in order to refer to the 
    // more robust fish object in fishes to get details.
    
    // 1. Get a copy of the piece of state
    const order = { ...this.state.order };

    // 2. Either add to the order or UPDATE the order (increment a pre-existing amount)
    order[fishKey] = order[fishKey] + 1 || 1;

    // 3. Call set state to update
    this.setState({ order });
  };

  loadSampleFishes = () => {
    this.setState({ fishes });
  };

  render() { 
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <FishDisplay 
                                                          key={key} 
                                                          id={key}
                                                          details={this.state.fishes[key]} 
                                                          addToOrder={this.addToOrder} />)}
          </ul>
        </div>
        <Order 
          fishes={this.state.fishes} 
          order={this.state.order}
        />
        <Inventory 
          createFish={this.createFish} 
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    )
  }
};

export default App;

/*
NOTES

Props - how the data gets to its home
State - where the data lives, its home

When a component only has a return method, it is really a stateless functional component and can be converted from 
class [Whatever] {
  render() {
    return (
      A bunch of JSX
    )
  }
}
to an arrow function (review the Header component to see the result of this)

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
REFS AND STATE
See the notes in StorePicker.js

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
WHY YOU CAN'T USE THIS INSIDE A FUNCTION DEFINED IN A CLASS

Notice we extend React.Component in component classes we create in React.
Inside React.Component and all its internal methods, it's already done the work 
of binding those methods to the React Component class. So inside those methods, the 
instance of the component can be referred to using "this". But our bespoke components
aren't part of that - they're custom and their functions AREN'T bound so we have to 
do it ourselves.


~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
LOOPING THROUGH AN OBJECT THAT CONTAINS OTHER OBJECTS

These notes pertain to the point at which we wanted to loop through the loaded collection
of fishes and write them to the page.

The fishes property in state is defined as an object (fishes: {}), not an array.
It contains other Fish objects. In javascript we can use use Object.keys(theObjectToLoopThrough)
to return an array of the "names" of the objects at which point .map can be used to walk 
through that array and use the names (keys) to grab the full object from the original container.



*/