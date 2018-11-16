import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {

  // Sometimes if a lot of code ends up being in the main Render() function, it's helpful
  // to make "sub" render functions to segment off some of the code. That's what we're doing 
  // here.
  renderOrderLine = orderFishId => {
    const fish = this.props.fishes[orderFishId];
    const howManyBought = this.props.order[orderFishId];
    const isAvailble = fish && fish.status === "available";

    if (!isAvailble) {
      return <li key={orderFishId}>
          Sorry {fish ? fish.name : "fish"} is no longer available!
        </li>;
    } 

    return <li key={orderFishId}>
        {howManyBought} lbs {fish.name} 
        {formatPrice(howManyBought * fish.price)}
      </li>
  }

  render() {
    const orderFishIds = Object.keys(this.props.order);

    const total = orderFishIds.reduce((prevTotal, orderFishId) => {
      // walking through each fish in the order list and getting
      // its price times the number of pounds ordered and then
      // adding that total to the running grand total

      const fish = this.props.fishes[orderFishId];
      const howManyBought = this.props.order[orderFishId];
      const isAvailble = fish && fish.status === "available";

      if (isAvailble) {
        return prevTotal + howManyBought * fish.price;
      }

      return prevTotal;
    }, 0);

    return <div className="order-wrap">
        <h2>Order</h2>

        <ul className="order">
          {orderFishIds.map(this.renderOrderLine)}
        </ul>


        <div className="total">
          Total: <strong>{formatPrice(total)}</strong>
        </div>
      </div>;
  }
}

export default Order;