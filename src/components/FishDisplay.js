import React from "react";
import { formatPrice } from "../helpers";

class FishDisplay extends React.Component {
  render() {
    // const name = this.props.details.name;
    // const price = this.props.details.price;
    // const status = this.props.details.status;
    // const desc = this.props.details.desc;
    // const image = this.props.details.image;

    // Instead of the above, use ES6 destructuring!!
    const { name, price, status, desc, image } = this.props.details;
    const id = this.props.id;

    // For styling purposes
    const isAvailable = status === "available";

    // this is an ok candidate to be written inline down below since it's simple and
    // only needed once. e.g. onClick={this.props.addToOrder(id)}
    const handleClick = () => {
      this.props.addToOrder(id);
    }

    return (
      <li className="menu-fish">
        <img src={image} name={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={handleClick}>
          {isAvailable ? "Add To Order" : "Sold Out!"}
        </button>
      </li>
    );
  }
}

export default FishDisplay;
