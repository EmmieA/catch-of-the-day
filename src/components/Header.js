import React from "react";

/*
The signature can also be written as
const Header = (props, age) => ( . . . )

You can also destructure the props as
const Header = ({ tagline, age }) => ( . . . )
Then you don't have to reference props.tagline, you just reference {tagline}
*/

const Header = props => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">of</span>
        <span className="the">the</span>
      </span>
      Day
    </h1>
    <h3 className="tagline">
      <span>{props.tagline}</span>
    </h3>
  </header>
);

export default Header;