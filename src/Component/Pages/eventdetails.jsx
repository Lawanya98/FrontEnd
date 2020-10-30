import React,{Component} from 'react';


const Details = (props)=> {
    const { name, cost,details,venue,comments,notifications} =
    (props.location && props.location.data) || {};

 

    return (
        <div>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div className>
                        <h3>{name}</h3>

                    </div>
                    <div className="col-sm">

                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <p className="lead">
                            <div className="row">
                                <div className="col text-center">Price</div>
                                <div className="col">{cost}</div>
                            </div>
                        </p>
                        <p className="lead">
                            <div className="row">
                                <div className="col text-center">venue:</div>
                                <div className="col"> {venue}</div>
                            </div>

                        </p>
                        <p className="lead">
                            <div className="row">
                                <div className="col text-center">Comments</div>
                                <div className="col"> {comments}</div>
                            </div>

                        </p>
                        <p className="lead">
                            <div className="row">
                                <div className="col text-center">Nptifications</div>
                                <div className="col"> {comments}</div>
                            </div>

                        </p>
                    </div>

                    <div className="col-sm">
                        
                       
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">

                    </div>
                    <div className="col-sm">


                    </div>
                    <div className="col-sm">

                    </div>
                </div>
            </div>

        </div>


    )
}


export default Details;