import React, { Fragment } from "react";
import getFunName from "../helpers";

class StorePicker extends React.Component {

  /* 
    This runs before the StorePicker component is created
    UNCOMMENT TO SEE WHAT IT LOOKED LIKE
  */
  // constructor() {
  //   /*
  //     MANDATORY FIRST LINE
  //     Similar to : base() in C#, ensures the React.Component's constructor method
  //     is called - We can't "extends React.Component" without there being one actually
  //     created first
  //   */
  //   super();

  //   // Now we bind every method in this class that needs to refer 
  //   // to the component instance inside of it.
  //   this.goToStore = this.goToStore.bind(this);
  // }
  
  storeNameInput = React.createRef();

  /*
    In lieu of the constructor function above, we changed
    goToStore(event) from a function to a property:
    goToStore = (event) => { . . . }
    And now "this" can be used inside of it.
  */
  goToStore = (event) => {
    // 1. stop form from submitting
    event.preventDefault();
    
    // 2. get text from the input
    /*
    There are a couple ways to do this. Through refs and using state. State is what we want to use
    when the data we're dealing with needs to be shared across components. Refs "violate" the React rule 
    of "don't touch the DOM" because they do reference DOM elements directly.
    
    To create a ref, it's defined in the class like:
    storeNameInput = React.createRef();
    And then in the input itself, an attribute is added:
    ref={this.storeNameInput}
    
    This "surfaces" the input on the component so we can grab it.
    */
   const storeName = this.storeNameInput.value.value;
   // console.log(this.storeNameInput.value.value);
      
   // 3. change the page to /store/whatever-was-entered
   this.props.history.push(`/store/${storeName}`);
  }



  render() {
    return <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          {/* comments go here */}
          <h2>Please enter a store</h2>
          <input 
            type="text" 
            required 
            ref={this.storeNameInput}
            placeholder="Store Name" 
            defaultValue={getFunName()} 
          />
          <button type="submit">Visit This Store</button>
        </form>
      </Fragment>;
  }
}

export default StorePicker;