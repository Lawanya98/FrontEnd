import React,{Component} from 'react';


const Payments = (props)=> {
//const{data}=props.location.data;
    const { name, ratings,locations, ranking} =
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
                                <div className="col text-center">Ratings</div>
                                <div className="col">{ratings}</div>
                            </div>
                        </p>
                        <p className="lead">
                            <div className="row">
                                <div className="col text-center">Loaction:</div>
                                <div className="col"> {locations}</div>
                            </div>

                        </p>
                        <p className="lead">
                            <div className="row">
                                <div className="col text-center">Ranking</div>
                                <div className="col"> {ranking}</div>
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


export default Payments;