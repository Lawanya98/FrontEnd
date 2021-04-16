import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HotelResult from '../Result/HotelResult';
import img1 from "../../../../images/hotel-slideshow/1.jpg"
import img2 from "../../../../images/hotel-slideshow/3.jpg"
import img3 from "../../../../images/hotel-slideshow/4.jpg"
import img4 from "../../../../images/hotel-slideshow/5.jpg"
import './HotelListItem.css'

import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import StarRoundedIcon from '@material-ui/icons/StarRounded';

import connect from "react-redux/es/connect/connect";
import * as actions from '../../../../store/actions/index';


const HotelListItem = (props) => {

    const { hotel_listitem_selected } = props;

    console.log("listItem checkin" + props.checkIn);

    const [path, setPath] = useState();

    const SimpleDialog = (props) => {

        const { onClose, open } = props;


        const handleListItemClick = () => {
            onClose();
        };

        return (
            <Dialog aria-labelledby="simple-dialog-title" open={open}>
                <DialogContentText id="alert-dialog-description" style={{padding:"10px"}}>
                    Please select Check In and Check Out Days to continue.
            </DialogContentText>


                <Button onClick={() => handleListItemClick()} color="primary">
                    ok
                </Button>


            </Dialog>
        );
    }



    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        if (props.checkIn == '' || props.ckeckOut == '') {
            setOpen(true);
        } else {
            setPath('./hotelResult');
        }

    };

    const handleClose = () => {
        setOpen(false);
    };

   

    return (
        <div>




            <div className="tab-content clearfix container">


                <div className="row" >
                    <div className="tm-recommended-place-wrap">
                        <div className="tm-recommended-place">
                            <div className="hotellistitem-img">

                                <img src={props.roomImgURL02} className="hotellistitem-hotel_img_element" alt="" />


                            </div>
                            <div className="tm-recommended-description-box">
                                <Grid container justify="flex-end">
                                    <Grid item>                                        
                                        <Typography variant="overline" className="hotellistitem_district" >{props.district}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container justify="flex-start">
                                    <Grid item>
                                        
                                    </Grid>
                                </Grid>
                                    <h3 className="hotellistitem-tm-recommended-title" >{props.name}</h3>
                                    <p><span><StarRoundedIcon color="secondary"/></span>{props.stars}<span> star</span></p>
                                    <p>{props.venue}</p>
                                   
                                    {/*<p className="tm-text-gray"><Ratings/></p>*/}
                                    
                                    <p>{props.otherDetails}</p>
                                    <Link to={{ pathname: path }}>
                                        <Button variant="outlined" color="green"
                                            onClick={() => {
                                                handleClickOpen();
                                                hotel_listitem_selected(props.name, props.checkIn, props.checkOut, props.stars);
                                            }}>
                                            SELECT
                                    </Button>
                                        <SimpleDialog open={open} onClose={handleClose} />
                                    </Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            <br />
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        // items: state.onlineStoreApp.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hotel_listitem_selected: (name, checkIn, checkOut, stars) => {
            dispatch(actions.get_hotel_listitem_selected(name, checkIn, checkOut, stars));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HotelListItem);

/* 
            district: props.district,
            hotelAddress: props.hotelAddress,
            pNumber: props.pNumber,
            avgPrice: props.avgPrice,
            stars: props.stars*/


{/*<div className="container">*/ }

{/*<div className="row">*/ }
{/*<div className="col-sm-12">*/ }

{/*<Link  className="link textdec" onClick={props.clicked} to={`/hotelList/${props.id}`}>*/ }
{/*<div className="card"  >*/ }
{/*<div className="row no-gutters">*/ }
{/*<div className="col-md-4 img">*/ }
{/*</div>*/ }
{/*<div className="col-md-8">*/ }
{/*<div className="card-body">*/ }
{/*<p>*/ }
{/*<p className="text-success"><h5 className="card-title">{props.hotelName}</h5></p>*/ }
{/*<p className="text-right" >{props.district}</p>*/ }
{/*</p>*/ }
{/*<p className="text-body">{props.otherDetails}</p>*/ }
{/*<p><span className="text-body">Address:</span> {props.venue}</p>*/ }
{/*<p><span className="text-body">Contact Number:</span> {props.pnumber}</p>*/ }
{/*<p className="text-danger"><span>Average Price per Person:</span> {props.pricePerDay}</p>*/ }
{/*<p className="text-right"> <button type="button">Select</button></p>*/ }
{/*</div>*/ }
{/*</div>*/ }
{/*</div>*/ }
{/*</div>*/ }
{/*</Link>*/ }
{/**/ }
{/**/ }
{/*</div>*/ }
{/*</div>*/ }



{/*</div>*/ }


