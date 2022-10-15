import React, {useState} from 'react';
import Sidebar from '../Sidebar';
import style from './TodoContainer.module.css';
import * as Icon from 'react-bootstrap-icons';

/** Home dashboard component */
export default function Home(props) {
    return (
        <div className="mt-3 container-fluid">
            <div className="content-wrapper">
                <div className="row px-3">
                    {/** Sidebar menu: start */}
                    <Sidebar />
                    {/** Sidebar menu: end */}
                    {/** Home dashboard: start */}
                    <div className={`col-12 col-xl-10 col-md-10 col-sm-12 border p-2 py-3 card ${style.content}`}>
                        <div className={style.subHeader}>
                            <span className="pb-3"><Icon.HouseDoorFill /> Home</span>
                        </div>
                        <div className={`p-3 ${style.mainContent}`}>
                            Content
                        </div> 
                    </div>
                    {/** Home dashboard: end */}
                </div>  
            </div>
        </div>
    )
}