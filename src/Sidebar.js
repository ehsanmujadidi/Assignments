import React from 'react';
import style from './App.module.css';
import * as Icon from 'react-bootstrap-icons';
import { NavLink, useLocation} from "react-router-dom"

{/* Sidebar Component */}
export default function Sidebar() {
  // Get active link to apply style
  const isActive = useLocation().pathname;
  return(
    <div className="col-12 col-xl-2 col-md-2 col-sm-12 p-2 pt-0">
      <div className="list-group" id="list-tab">
        <NavLink className={`list-group-item-action ${style.listGroupItemCustom} ${isActive=='/' ? style.activeLink : ""}`} to="/">
          <Icon.HouseDoorFill className={`${style.linkIcon}`} /> <span className={`${style.linkTitle}`}>Home</span>
        </NavLink>
        <NavLink className={`list-group-item-action ${style.listGroupItemCustom} ${isActive=='/Todo' ? style.activeLink : ""}`} to="/Todo">
          <Icon.ListUl className={`${style.linkIcon}`} /> <span className={`${style.linkTitle}`}>Todo</span>
        </NavLink>
      </div>
    </div>
  )
}