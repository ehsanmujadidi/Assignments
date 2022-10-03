import React, {useState} from 'react';
import Sidebar from '../Sidebar';
import style from './TodoContainer.module.css';
import * as Icon from 'react-bootstrap-icons';

{/* TodoList Component */}
export default function TodoList(props) {
    return (
        <div className="mt-3 container-fluid">
            <div className="content-wrapper">
                <div className="row px-3">
                    <Sidebar />
                    <div className={`col-12 col-xl-10 col-md-10 col-sm-12 border p-2 py-3 card ${style.content}`}>
                        <div className={style.subHeader}>
                            <span className="pb-3"><Icon.HouseDoorFill /> Home</span>
                        </div>
                        <div className={`p-3 ${style.mainContent}`}>
                            Content
                        </div> 
                    </div>
                </div>  
            </div>
        </div>
    )
}