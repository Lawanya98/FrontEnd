import React, { useEffect, useState } from 'react';
import './HotelList.css';
import HotelListItem from './HotelListItem';
import Axios from 'axios';
import _ from "lodash";
import {Link} from 'react-router-dom';
import HotelFilter from '../Component/Filter/HotelFilter';
import connect from "react-redux/es/connect/connect";

import TextField from '@material-ui/core/TextField';

const HotelList = (props) => {

    //https://alphax-api.azurewebsites.net/api/hotelsservices/Res?arrival=2020-01-01&&departure=2020-01-01&&capacity=2
    //https://alphax-api.azurewebsites.net/api/hotelsservices/Res?arrival=${arrival}&&departure=${departure}&&capacity=${capacity}

    const { district_filter, star_filter } = props;

    const [hotels, setHotels] = useState([]);
    const [search, setSearch] = useState('');
    // const [sorts, setSort] = useState('');
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');



    useEffect(() => {
        Axios
            .get('https://alphax-api.azurewebsites.net/api/hotelsservices')
            .then((responseData) => {
                console.log(responseData);
                setHotels(responseData.data);
            })
            .catch(error => {
                console.log(error)
            })


    },
        []
    );

    let pp = hotels.filter((ele, ind) => ind === hotels.findIndex(elem => elem.name === ele.name))



    const filterHotels = pp.filter(item => {
        return item.name.toLowerCase().includes(search.toLowerCase())
    })

    const filterByDistrict = filterHotels.filter(item=>{
        if(district_filter === null || district_filter === "All"){
            return filterHotels;
        }else{
            return item.district.includes(district_filter)
        }
    })

    const filterByStar = filterByDistrict.filter(item=>{
        if(star_filter === null || star_filter === "All"){
            return filterByDistrict;
        }else if(star_filter === "1"){
            return item.stars == 1
        }else if(star_filter === "2"){
            return item.stars == 2
        }else if(star_filter === "3"){
            return item.stars == 3
        }else if(star_filter === "4"){
            return item.stars == 4
        }else{
            return item.stars == 5
        }
    })


    //let Hotels = filterHotels
    // const hotelsComponent = (e) => {
    //     if (e.target.value === '' && e.target.value === 'all') {
    //         return Hotels = filterHotels;
    //     } else if (e.target.value === 'Low to High') {
    //         return Hotels = filterHotels.sort((a, b) => a.pricePerDay > b.pricePerDay ? 1 : -1);
    //     } else if (e.target.value === 'High to Low') {
    //         return Hotels = filterHotels.sort((a, b) => a.pricePerDay < b.pricePerDay ? 1 : -1);
    //     }
    //     return Hotels.map((hotel) => {
    //         return (
    //             <div>
    //                 <HotelListItem
    //                     key={hotel.key}
    //                     id={hotel.id}
    //                     name={hotel.name}
    //                     venue={hotel.venue}
    //                     pricePerDay={hotel.pricePerDay}
    //                     district={hotel.district}
    //                     pnumber={hotel.pnumber}
    //                     features={hotel.features}
    //                     otherDetails={hotel.otherDetails}
    //                     roomTypeId={hotel.roomType}
    //                     imgURL={hotel.imgURL}
    //                 ></HotelListItem>
    //             </div>
    //         );
    //     });
    // };

    
    const handleCheckin = (event) =>{
        setCheckIn(event.target.value);
        console.log("checkIn : "+event.target.value)
    }
  
    const handleCheckout = (event) =>{
        setCheckOut(event.target.value);
        console.log("checkOut : "+event.target.value)
    }
    
    
    
    const hotelsComponent = () => {

        return filterByStar.map((hotel) => {
            return (
                <div>
                    <HotelListItem
                        key={hotel.key}
                        id={hotel.id}
                        name={hotel.name}
                        venue={hotel.venue}
                        stars={hotel.stars}
                        pricePerDay={hotel.pricePerDay}
                        district={hotel.district}
                        pnumber={hotel.pnumber}
                        features={hotel.features}
                        otherDetails={hotel.otherDetails}
                        roomTypeId={hotel.roomType}
                        roomImgURL02={hotel.roomImgURL02}
                        checkIn={checkIn}
                        checkOut={checkOut}
                    ></HotelListItem>
                </div>
            );
        });
    }









    return (
        <div>

            <div className="container">
                <div className="row tm-banner-row" id="tm-section-search">
                    <form className="hotellist-tm-search-form1 tm-section-pad-2" >
                        <div className="form-row tm-search-form-row">

                            <div className="form-group tm-form-group hotellist-tm-form-group-pad1 hotellist-tm-form-group-6">
                                <label htmlFor="inputCheckIn" className="tm-form-label-search" >Check In </label>
                                <input
                                    name="check-in"
                                    type="date"
                                    className="form-control"
                                    id="inputCheckIn"
                                    placeholder="Check In"
                                    onChange={handleCheckin}

                                />
                            </div>

                            <div className="form-group tm-form-group tm-form-group-pad hotellist-tm-form-group-6">
                                <label className="tm-form-label-search" htmlFor="inputCheckOut">Check Out </label>
                                <input
                                    name="check-out"
                                    type="date"
                                    className="form-control"
                                    id="inputCheckOut"
                                    placeholder="Check Out"
                                    onChange={handleCheckout} min={checkIn}

                                />
                            </div>



                        </div>
                    </form>
                </div>

                <div className="row tm-banner-row tm-banner-row-header">
                    <div className="col-xs-12">
                        <div className="tm-banner-header">

                        </div>
                    </div>
                </div>
                <div className="hotellist-tm-banner-overlay1"></div>

            </div>

            <br/>

            

            <div className="text-center">
                <input type="text" className=" hotellist-shadow-lg " placeholder="Search By Hotel Name" onChange={e => setSearch(e.target.value)} />
            </div>
            <br/>
            <br/>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-3">
                        <div className="hotellist_root">
                            <HotelFilter></HotelFilter>
                        </div>
                    </div>
                    <div className="col-8">
                        <br />
                        <div className="container">
                            {hotelsComponent()}
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </div>
    );





}


const mapStateToProps = (state) => {
        return {
            district_filter: state.hotel_input_reducer.district_filter,
            star_filter: state.hotel_input_reducer.star_filter,
        };
    };
    
    const mapDispatchToProps = dispatch => {
        return {
            //
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(HotelList);


// GROUP CODE

//  let pp = arr.filter( (ele, ind) => ind === arr.findIndex( elem => elem.jobid === ele.jobid && elem.id === ele.id))

//  const groupBy = (key) => (array) =>
//  array.reduce((objectsByKeyValue, obj) => {
//    const value = obj[key];
//    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
//    return objectsByKeyValue;
//  }, {});

// const groupByBrand = groupBy("name");

// console.log(
//  JSON.stringify(
//    {
//      hotelsByName: groupByBrand(hotels)
//    },
//    null,
//    2
//  )
// ); 

// const groups = hotels.reduce((groups, item) => {
//     const group = (groups[item.name] || []);
//     group.push(item);
//     groups[item.name] = group;
//     return groups;
//   }, {});

//   console.log(groups);