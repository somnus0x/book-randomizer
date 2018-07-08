import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="bar">
        <div className="row align-items-center">
          <div className="col-md-2">
            <img src="/img/logo.png" className="logo" />
          </div>
          <div className="col-md-6 ">
            <input
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div className="col-md-1 bar-grid">Read</div>
          <div className="col-md-1 bar-grid">Cover</div>
          <div className="col-md-1 ">Category</div>
        </div>
      </div>
    );
  }
}

export default Navbar;
