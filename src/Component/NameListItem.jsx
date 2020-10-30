import React from 'react';
import { Link } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import './NameListItem.css';
   



const NameListItem =(props)=> {
    let itemdetail =  {
                    
         name :props.eventName,
         cost :props.price,
         details :props.otherDetails,
         venue :props.venue,
         comments :props.comments,
         notifications :props.notifications,
                       
        };
        let togglePersonsHandler = () => {
            console.log(itemdetail.name);
            console.log(itemdetail.comments);
        }
    
    
    
    return (
       
        <ul>
            <li className="list-group-item shadow-sm">
                <div className="row align-items-center">
                    <div className="col-3">

                    </div>
                    <div className="col-9">
                        <div className="card">
                            <Link
                                to={{ pathname: "/eventdetails", data:itemdetail}}
                                className="link textdec"  onClick={togglePersonsHandler}>

                                <h4> {props.name}</h4>


                                <p>Cost :{props.cost}</p>
                                <p>Details :{props.details}</p>
                                <p>venue:{props.venue}</p>
                                
                            </Link>
                        </div>

                    </div>
                </div>

            </li>
        </ul>

    );



}
export default NameListItem;