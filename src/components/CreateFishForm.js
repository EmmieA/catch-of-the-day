import React from "react";

class CreateFishForm extends React.Component {

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = event => {
    // stop the form from submitting
    event.preventDefault();

    // create a fish object from entries
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value
    };

    // call the createFish function that lives at the app.js level and 
    // has been passed down to Inventory and then again to CreateFishForm
    // via props
    this.props.createFish(fish);

    // Clear the form
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" name="name" ref={this.nameRef} placeholder="Name" />
        <input
          type="text"
          name="price"
          ref={this.priceRef}
          placeholder="Price"
        />
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input
          type="text"
          ref={this.imageRef}
          name="image"
          placeholder="Image"
        />
        <button type="submit">+ Add Fish!</button>
      </form>
    );
  }
}

export default CreateFishForm;
