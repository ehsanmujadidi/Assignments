import React from 'react';
import style from './Sidebar.module.css';

{/* Sidebar Component */}
export default function Sidebar() {
    return(
      <div className={`col-2 col-xl-2 col-md-2 col-sm-12 p-2 ${style.sidebar}`}>
        <div className="list-group" id="list-tab">
          <a className={`list-group-item-action ${style.activeLink} ${style.listGroupItemCustom}`} href="/">Home</a>
        </div>
      </div>
    )
  }