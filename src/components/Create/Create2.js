import React, { useState, useEffect, useRef } from 'react'
import '../CreateTour/CreateTour.css';
import Header from '../Header';
import Footer from '../Footer/footer'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Create2 = () => {
    const [day, setDay] = useState([]);
    const [data, setData] = useState([])
    const [filter, setFilter] = useState([])
    const [check, setCheck] = useState([])
    const [isDay, setIsDay] = useState([])

    const [open, setOpen] = useState(false);

    const handleOpen = (item) => {
        setOpen(true);
        setIsDay(item.id)
        console.log(item);
    };
    const handleClose = () => setOpen(false);

    let componentMounted = true;

    useEffect(() => {
        const getProduct = async () => {

            const response = await fetch(`http://localhost:8080/review/listtour`)
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());

            }
            return () => {
                componentMounted = false;
            }
        }
        getProduct();
        setData(data)
    }, []);

    const newDay = event => {
        event.preventDefault();
        setDay([
            ...day,
            {
                id: day.length,
            }
        ]);
    };

    const removeDay = item => {
        console.log("helo", item)
        const index = day.findIndex(x => x.id === item.id);

        const newListDay = [...day];
        newListDay.splice(index, 1);
        setDay(newListDay)
    }

    const handleSubmit = () => {

    }

    function dragEnd(){

    } 

    return (
        <div>
            <Header />
            <div className='create-main-2'>
                <div className='title'>Tạo tour</div>
                <div className='create-s'>
                    <div className='ipt-create'>
                        <div>Chọn ngày bắt đầu:</div>
                        <input type='date' className='form-control' />
                        <div>Đặt tên cho lịch trình:</div>
                        <input type='text' className='form-control' placeholder='Lịch trình của tôi' />
                    </div>

                    <button className='btn-add' onClick={newDay}> Thêm mới <AddCircleOutlineIcon /></button>
                    <div className='create-2'>
                        <div>
                            {day.map(item => (
                                <div key={item.id}>
                                    <div className='add-day-2'>
                                        <div> Ngày thứ {item.id + 1}</div>
                                        <div onClick={removeDay}><DeleteForeverIcon /></div>
                                    </div>
                                    <div onDragEnd={dragEnd} className='dragEnd'></div>
                                </div>
                            ))}

                        </div>
                        <div>
                            {filter.map(item => (
                                <div>
                                    <div className='create-list'>
                                        <img className='imgtour-create' src={"http://localhost:8080/uploads/" + item.imgURL} />
                                        <div>{item.nametour}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className='hightlight-create' onClick={handleSubmit} > Lưu lịch trình </button>
                </div>

            </div>
            <Footer />
        </div>
    );
}
export default Create2;