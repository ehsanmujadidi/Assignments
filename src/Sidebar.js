import React from 'react';
import './Sidebar.css';

{/* Sidebar Component */}
export default function Sidebar() {
    return(
      <div className="col-2 col-xl-2 col-md-2 col-sm-12 sidebar p-2">
        <div className="list-group" id="list-tab">
          <a className="list-group-item-custom list-group-item-action active-link" href="#">Home</a>
          <a className="list-group-item-custom list-group-item-action disabled" href="#">....</a>
        </div>
      </div>
    )
  }