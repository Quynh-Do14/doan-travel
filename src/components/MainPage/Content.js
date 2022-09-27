import React from 'react'
import background1 from '../Asset/bannermainpage.jpg';
import background2 from '../Asset/banner2.jpeg';
import background3 from '../Asset/banner1.png';
import { Carousel } from 'bootstrap';
import './Mainpage.css'
import Slide from '../Slide/Slide';
import Header from '../Header';
import Footer from '../Footer/footer';
import Category from '../Category/Category';
import Posts from '../Posts/Posts';
export default function Content() {
    return (
        <>
            <Header />
            <Slide />
            <Category/>
            <Posts/>
            {/* <img className='bg-mainpage' src={background1} /> */}
            <div className='main-content'>
            <div className='slogan'>
                <div>
                    <p className='title-main'>Welcome to Vietnam!</p>
                    <p className='text'>Over 3000 years of history, Vietnam is glad to show to the world all the most beautiful sides of this country.
                        From cuisine to culture, Vietnam promises to satisfy even the most difficult tourist. Just find a tour here,
                        it can lead you to anywhere you want to see in Vietnam,
                        gives you a chance to have impressive and unforgettable travel experiencHomee!</p>
                </div>
            </div>
            <div className='banner'>
                <p className='title-main'>Top VietNam Tours Destination</p>
                <div className='imgcontainer'>
                    <img className='img-1' src="https://testasiancharm.webtravel.vn/files/files_1/dai-dien-menu/4735754hanoi_nha_trang.jpg" />
                    <div className='imgright'>
                        <div className='img-2 img-up'>
                            <img className='img-3' src="https://testasiancharm.webtravel.vn/files/files_1/dai-dien-menu/dainoi(3).jpg" />
                            <img className='img-4' src="https://testasiancharm.webtravel.vn/files/files_1/dai-dien-menu/shutterstock%2098382038.jpg" />
                        </div>
                        <div className='img-2 img-down'>
                            <img className='img-3' src="https://testasiancharm.webtravel.vn/files/files_1/dai-dien-menu/110_sapa.jpg" />
                            <img className='img-3' src="https://testasiancharm.webtravel.vn/files/files_1/dai-dien-menu/at_pho-co-hoi-an-da-nang_a050800517632f2b1f385e864c2438ed.jpg" />
                            <img className='img-3' src="https://testasiancharm.webtravel.vn/files/files_1/dai-dien-menu/at_pho-co-hoi-an-da-nang_a050800517632f2b1f385e864c2438ed.jpg" />
                        </div>
                    </div>
                </div>



                <p className='title-main'>Discover VietNam Tours Styles</p>
                <div className='imgcontainer'>
                    <img className='img-1' src="https://testasiancharm.webtravel.vn/files/files_1/Tour/vietnam-tour/5.jpg" />
                    <div className='imgright'>
                        <div className='img-2 img-up'>
                            <img className='img-3' src="https://testasiancharm.webtravel.vn/files/files_1/Tour/vietnam-tour/45.jpg" />
                            <img className='img-4' src="https://testasiancharm.webtravel.vn/files/files_1/Tour/vietnam-tour/du-lich-vinh-ha-long-4-min.jpg" />
                        </div>
                        <div className='img-2 img-down'>
                            <img className='img-3' src="https://testasiancharm.webtravel.vn/files/files_1/Tour/vietnam-tour/34.jpg" />
                            <img className='img-3' src="https://testasiancharm.webtravel.vn/files/files_1/Tour/vietnam-tour/56.jpg" />
                            <img className='img-3' src="https://testasiancharm.webtravel.vn/files/files_1/Tour/vietnam-tour/56.jpg" />
                        </div>
                    </div>
                </div>
                </div>
                <Footer />
            </div>
        </>
    )
}
