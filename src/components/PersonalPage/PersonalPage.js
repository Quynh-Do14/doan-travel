import React, { useEffect, useState } from 'react'
import { Divider } from 'antd';
import './PersonalPage.css'
import Header from '../Header';
import Footer from '../Footer/footer';
import ListBookingTour from './ListBookingTour/ListBookingTour';
import ListBookingHotel from './ListBookingHotel/ListBookingHotel';
import axios from 'axios';
import { useParams } from 'react-router';
import { Button, Modal } from 'antd';
import Profile from './Profile/Profile';

function PersonalPage() {
    const [activeTab, setActiveTab] = useState("tab1");


    const handleTab1 = () => {
        setActiveTab("tab1");
    }
    const handletab2 = () => {
        setActiveTab("tab2")
    }

    const handletab3 = () => {
        setActiveTab("tab3")
    }

    const handletab4 = () => {
        setActiveTab("tab4")
    }


    return (
        <div>
            <Header />
            <div className='personal-page'>
                <div className='personal-all'>
                    <div className='per-product'>
                        <li id='per-btn' onClick={handleTab1} className={activeTab === "tab1" ? "lively" : ""}>Thông tin cá nhân</li>
                        <li id='per-btn' onClick={handletab2} className={activeTab === "tab2" ? "lively" : ""}>Lịch trình đã tạo</li>
                        <li id='per-btn' onClick={handletab3} className={activeTab === "tab3" ? "lively" : ""}>Lịch trình đã đặt</li>
                        <li id='per-btn' onClick={handletab4} className={activeTab === "tab4" ? "lively" : ""}>Lịch sử đặt phòng</li>
                    </div>
                    <div>
                        {
                            activeTab === "tab1" ?
                                <div className=''>

                                    <Divider orientation="left" className='personal-ttl'>Thông tin cá nhân</Divider>
                                    <Profile />
                                </div> :
                                activeTab === "tab2" ?
                                    <div>
                                        <Divider orientation="left" className='personal-ttl'>Lịch trình đã tạo</Divider>
                                        <div className='personal-book'>
                                            <div className='personal-content'>Lịch trình đã tạo</div>
                                        </div>
                                    </div>
                                    :
                                    activeTab === "tab3" ?
                                        <div>
                                            <Divider orientation="left" className='personal-ttl'>Lịch trình đã đặt</Divider>
                                            <div className='personal-book'>
                                                <div className='personal-content'><ListBookingTour /></div>
                                            </div>
                                        </div> :
                                        <div>
                                            <Divider orientation="left" className='personal-ttl'>Lịch trình đặt phòng</Divider>
                                            <div className='personal-book'>
                                                <div className='personal-content'><ListBookingHotel /> </div>
                                            </div>
                                        </div>

                        }
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PersonalPage