import React from "react";
import CreateFishForm from "./CreateFishForm";

class Inventory extends React.Component {

  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>

        <CreateFishForm 
          createFish={this.props.createFish}
        />

        <button onClick={this.props.loadSampleFishes}>Load Sample Fishes</button>
      </div>
    );
  }
}

export default Inventory;