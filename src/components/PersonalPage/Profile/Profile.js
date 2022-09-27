import React, { useEffect, useState } from 'react'
import '../PersonalPage.css';
import axios from 'axios';

function Profile() {
    const URL = `http://localhost:8080/user/checkStatusInTour/${localStorage.getItem('user_auth')}`

    const [data, setData] = useState([])

    useEffect(() => {
        const GetProfile = async () => {
            const response = await fetch(`http://localhost:8080/user/api/detailuser/${localStorage.getItem('user_auth')}`)
            setData(await response.json())

        }
        GetProfile()
    }, [])
    const statusCheck = (e) => {
        e.preventDefault();
        axios.post(URL, {
        }).then(res => {
            console.log(res);
            alert('Đã hoàn thành chuyến đi')
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div>
            <div className='personal'>
                <table  >
                    <td>
                        <tr className='personal-title'>Tên người dùng:</tr>
                        <tr className='personal-title'>Số điện thoại:</tr>
                        <tr className='personal-title'>Email:</tr>
                        <tr className='personal-title'>Địa chỉ:</tr>
                        <tr className='personal-title'>Trạng thái:</tr>
                    </td>
                    <td>
                        {/* <tr className='personal-name'>{localStorage.getItem('user_name')} </tr>
                                                <tr className='personal-name'>{localStorage.getItem('user_phonenumber')} </tr>
                                                <tr className='personal-name'>{localStorage.getItem('user_email')} </tr>
                                                <tr className='personal-name'>{localStorage.getItem('user_address')} </tr>
                                                <tr className='personal-name'>{localStorage.getItem('user_status')} </tr>
                                                <tr className='personal-name'><button onClick={statusCheck}>Đã hoàn thành tất cả các Tour</button> </tr> */}

                        <tr className='personal-name'>{data.username} </tr>
                        <tr className='personal-name'>{data.phonenumber} </tr>
                        <tr className='personal-name'>{data.email}  </tr>
                        <tr className='personal-name'>{data.address}  </tr>
                        <tr className='personal-name'>
                            {
                                data.status == 1
                                    ?
                                    <div>Đang đi du lịch </div>
                                    :
                                    <div>Có thể đặt Tour </div>
                            }
                        </tr>
                        <tr className='personal-name'>
                            {
                                data.status == 1
                                    ?
                                    <button className='btn btn-outline-danger' onClick={statusCheck}>Hoàn thành Tour</button>
                                    :
                                    <div>Đã hoàn thành tất cả các Tour </div>
                            }

                        </tr>
                    </td>
                </table>
            </div>
        </div>
    )
}

export default Profile