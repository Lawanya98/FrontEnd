import React from 'react';
import  './listitem.css';
import {Link} from 'react-router-dom'
import Listitemdetails from "./listitemdetails";

const listitem=(props)=>{

   let itemdetail =  {
                    name:props.name,
                    id:props.id,
                    price:props.price,
                    vtype:props.vtype,
                    rating:props.rating
    }

    let togglePersonsHandler = () => {
        console.log(itemdetail.name);
        console.log(itemdetail.id);
    }


    return(
        <div>
            <br/>

            <Link to={{pathname:"/listitemdetails",data:itemdetail}} className="link textdec">
                <div className="container textdec" onClick={togglePersonsHandler}>

                    <div className="row">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-8">
                            <div className="card">
                                <h5 className="card-header">{props.name}</h5>
                                <div className="card-body row">
                                    <div className="col-1">

                                    </div>
                                    <div className="col-7">
                                        <h5 className="card-title">Vehicle Type: {props.vtype}</h5>
                                        <p className="card-text">Price per day: {props.price}</p>


                                    </div>
                                    <div className="col-4">
                                        <span className="badge badge-success">Ratings: {props.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-2">

                        </div>
                    </div>
                </div>

            </Link>



        </div>
    )
};

export default listitem;