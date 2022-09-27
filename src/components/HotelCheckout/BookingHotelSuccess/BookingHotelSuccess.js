import React from 'react'
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

import { useParams, useHistory } from 'react-router-dom'
import Check from '../../Asset/Check.png'
import '../../Checkout/BookTourSuccess/BookingTourSuccess.css'
function BookHotelSuccess() {
    const history = useHistory();

    const handleDetail = () => {
        history.push('/product');
    }
    return (
        <div className='ts'>
            <div className='ts-main'>
                <img className='ts-check' src={Check}/>
                <div className='ts-title'>BẠN ĐÃ ĐẶT PHÒNG THÀNH CÔNG</div>
                <div className='ts-tk'>Cảm ơn quý khách đã sử dụng hệ thống của chúng tôi</div>
                <div className='ts-para'>Nhân viên của chúng tôi sẽ liên hệ với Quý khách trong thời gian sớm nhất </div>
                <div className='ts-hotline'>Mọi thắc mắc xin liên lạc vào Hotline: 1900 1177</div>
                <div className='ts-back' onClick={handleDetail}><KeyboardReturnIcon />Trở lại trang chủ</div>
            </div>

        </div>
    )
}
export default BookHotelSuccess