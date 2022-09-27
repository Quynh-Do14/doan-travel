import React, { useState, useEffect, useRef } from 'react'
import './CreateTour.css';
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

const CreateTour = () => {
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

    const handleSelect = () => {
        console.log('handleSelect', { id: check });
        // setTour()
        return check
    }

    const handleCheck = (id) => {
        setCheck(prev => {
            const isCheck = check.includes(id)
            if (isCheck) {
                return check.filter(item => item !== id)
            } else {
                return [...prev, id]
            }
        })
        setDay(day.map(j => {
            if (j.id == isDay) {
                const isCheck = check.includes(id)
                if (isCheck) {
                    j.check = check.filter(item => item !== id)
                } else {
                    j.check = [...check, id]
                }
            }
            return j;
        }));



    }
    const handleSubmit = () => {

    }

    return (
        <div>
            <Header />
            <div className='create-main'>
                <div className='title'>Tạo tour</div>
                <div className='create-s'>
                    <div className='ipt-create'>
                        <div>Chọn ngày bắt đầu:</div>
                        <input type='date' className='form-control' />
                        <div>Đặt tên cho lịch trình:</div>
                        <input type='text' className='form-control' placeholder='Lịch trình của tôi' />
                    </div>

                    <button className='btn-add' onClick={newDay}> Thêm mới <AddCircleOutlineIcon /></button>

                    <div>
                        {day.map(item => (
                            <div key={item.id}>
                                <div className='add-day'>
                                    <div> Ngày thứ {item.id + 1}</div>
                                    <div onClick={removeDay}><DeleteForeverIcon /></div>
                                </div>

                                <div className='select-tour'>
                                    {item.check && item.check.map((check, index) => {
                                        return (
                                            <li key={index}>
                                                {check}
                                            </li>
                                        )
                                    })}

                                    <button className='btn-add'
                                        onClick={() => handleOpen(item)}
                                    // onClick={() => setIsDay(item.id)}
                                    > Chọn địa điểm</button>
                                </div>

                            </div>
                        ))}

                    </div>
                    <button className='hightlight-create' onClick={handleSubmit} > Lưu lịch trình </button>
                </div>

            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="modal-content">
                        {filter.map((product) => {
                            return (
                                <div className='create-list-model'>
                                    <input type='checkbox'
                                        check={check.includes(product.nametour)}
                                        onChange={() => handleCheck(product.nametour)} />

                                    <img className='imgtour-create' src={"http://localhost:8080/uploads/" + product.imgURL} />

                                    <div>{product.nametour}</div>
                                </div>
                            )
                        })}
                        {/* <button className='btn-add' onClick={handleSelect}> Thêm mới</button> */}

                    </div>
                </Box>
            </Modal>

            <Footer />
        </div>
    );
}
export default CreateTour