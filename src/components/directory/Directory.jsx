import React from "react"
import MenuItem from "../menu-item/MenuItem";
import sections from "../../data/sections";
import "./directory.scss";
class Directory extends React.Component{
  constructor(props) {
    super(props);
    this.state = {sections};
  }

  render() {
    const { sections } =  this.state;
    return (
      <div className="directory-menu">
      {
        sections.map( ({id, ...otherProps}) => {
          return <MenuItem key = {id} {...otherProps}></MenuItem>
        })
      }
      </div>
    )
  }
}

export default Directory;