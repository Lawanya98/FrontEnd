import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import './HotelResultItem.css';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../../../../images/hotel-img/deluxe-room.jpg';
import image2 from '../../../../images/hotel-img/double-room.jpg';
import image3 from '../../../../images/hotel-img/single-room.jpg';


const HotelResultItem = (props) => {

    
    const [numofRooms , setNumofRooms] = useState();

    const handleNumofRooms = (event) =>{
        setNumofRooms(event.target.value);
        console.log("numofrooms : "+event.target.value)
    } 
 
    
    let data = {
        id: props.id,
        name: props.name,
        roomType: props.roomType,
        pricePerDay: props.pricePerDay,
        numofRooms: numofRooms,
        checkIn: props.checkIn,
        checkOut: props.checkOut,
        imgURL: props.imgURL,
    }

    
    return (
        <div>
            <div>

                <Table striped bordered hover>

                    <tbody>
                        <tr>
                            <td className="hotelresultitem-tableName">{props.roomType}</td>
                            <td className="hotelresultitem-tableGuests">{props.capacity}</td>
                            <td className="hotelresultitem-tableSpecs"></td>
                            <td className="hotelresultitem-tablePrice">{props.pricePerDay}</td>
                            <td className="hotelresultitem-a"><input type="number" min="0" className="form-control button-room" aria-label="Username" aria-describedby="basic-addon1" 
                                onChange={handleNumofRooms}/>
                            </td>
                            <td className="hotelresultitem-b">
                                <Link to={{ pathname: '/hotelCart' , data:data}}>
                                    <button type="button" className="btn btn btn-secondary">Reserve Rooms</button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>



            <br />

            <div className="container" style={{ alignSelf: 'center' }}>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                        <Carousel className="carousel" >
                            <Carousel.Item>
                                <img src={props.roomImgURL02}
                                    className="d-block w-100"                                 
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <p>{props.roomType}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image2}
                                    alt="Second slide"
                                />

                                <Carousel.Caption>
                                    <p>{props.roomType}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={image3}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <p>{props.roomType}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    <div className="col-3"></div>
                </div>
            </div>
            <br />

            <div className="container"></div>





        </div>




    );
}

export default HotelResultItem;