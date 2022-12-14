import React, { useEffect, useState } from 'react';
import '../ListBookingTour/ListBookingTour.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ListBookingHotel() {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([])
    const { id } = useParams();
    useEffect(() => {
        const getProduct = async () => {

            //     const response = await fetch(`http://localhost:8080/review/api/booking/listUserBookHotel`)
            //     if (componentMounted) {
            //         setData(await response.clone().json());
            //         setFilter(await response.json());

            //     }
            //     return () => {
            //         componentMounted = false;
            //     }
            // }
            // getProduct();
            // setData(data)
            const response = await fetch(`http://localhost:8080/review/api/info/PersonalBookingHotel/${localStorage.getItem('user_auth')}`)
            setData(await response.json())
        }
        getProduct();
    }, []);

    const setStatus = (id) => {
        axios.post(`http://localhost:8080/review/api/info/SetStatusBookHotelFromHappenningToComplete/${id}`, {
        })
        window.location.reload()
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className='row'>
                {data.map(item => (
                    <div div className='col-4'>
                        <div className='per-booking'>
                            <div className='per-img-name'>
                                <img className='per-img' src={"http://localhost:8080/uploads/" + item.imgURL} />
                                <div className='per-title-name'>L???ch s??? ?????t ph??ng </div>
                                <div className='per-name-price'>
                                    <div className='per-tour-name' >{item.hotelName} </div>
                                    <div className='per-tour-price' >Gi?? ti???n: {(item.price).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} VN?? </div>
                                    <div className='per-tour-name' >Ng??y t???o: {item.createdAt} </div>
                                    <div className='per-tour-name' >Ng??y nh???n ph??ng: {item.start} </div>
                                    <div className='status-booking'> Tr???ng th??i:
                                        {
                                            item.status == 1
                                                ?
                                                <div style={{ color: 'purple' }}> ??ang ch??? x??c nh???n </div>
                                                :
                                                item.status == 2
                                                    ?
                                                    <div style={{ color: 'blue' }}> ??ang di???n ra </div>
                                                    :
                                                    item.status == 3 ?
                                                        <div style={{ color: 'green' }}> ???? ho??n th??nh </div>
                                                        :
                                                        <div style={{ color: 'red' }}> ???? h???y</div>

                                        }
                                    </div>
                                    {
                                        item.status == 2
                                            ?

                                            <div>
                                                <Button color="secondary" onClick={handleClickOpen}>
                                                    Tr??? ph??ng
                                                </Button>
                                                <Dialog
                                                    open={open}
                                                    onClose={handleClose}
                                                    aria-labelledby="alert-dialog-title"
                                                    aria-describedby="alert-dialog-description"
                                                >
                                                    <DialogContent>
                                                        <DialogContentText id="alert-dialog-description">
                                                            B???n ???? tr??? ph??ng ch??a??
                                                        </DialogContentText>
                                                    </DialogContent>
                                                    <DialogActions>
                                                        <Button onClick={handleClose}>H???y</Button>
                                                        <Button onClick={() => { setStatus(item.id) }}>
                                                            Tr??? ph??ng
                                                        </Button>
                                                    </DialogActions>
                                                </Dialog>
                                            </div>

                                            :
                                            null
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default ListBookingHotel