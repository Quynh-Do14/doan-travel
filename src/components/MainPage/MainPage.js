import React from 'react'
import Search from '../Search/Search'
import background1 from '../Asset/banner3.png';
import Header from '../Header';
import Footer from '../Footer/footer';
import ProductItem from '../Product/Product';
import DetailProduct from '../ProductDetail/DetailProduct';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Content from './Content';
import Checkout from '../Checkout/Checkout';
import Login from '../../Login/Login';
import Signin from '../../Login/Signin';
import Hotel from '../Product/Hotel/Hotel';
import SearchTxt from '../Search/SearchTxt';
import { Restaurant } from '../Product/Restaurant/Restaurant';
import Vehicle from '../Product/Vehicle/Vehicle';
import DetailHotel from '../Product/Hotel/DetaiHotel/DetailHotel';
import Result from '../Search/Result';
import HotelCheckout from '../HotelCheckout/HotelCheckout';
import SearchMain from '../Search/Searchmain/SearchMain';
import LoginAuth from '../../Auth/Login/Login';
import RegisterAuth from '../../Auth/Login/Register';
import HomeStay from '../Product/HomeStay/HomeStay';
import CreateTour from '../CreateTour/CreateTour';
import Create from '../Create/Create';
import Create2 from '../Create/Create2';
import PersonalPage from '../PersonalPage/PersonalPage';
import BookingTourSuccess from '../Checkout/BookTourSuccess/BookingTourSuccess';
import BookHotelSuccess from '../HotelCheckout/BookingHotelSuccess/BookingHotelSuccess';
import CategoryList from '../Category/CategoryList/CategoryList';
import PostList from '../Posts/PostList/PostList';

const RouterControl = [
  {
    path: '/',
    exact: true,
    main: () => <Content />
  },

  {
    path: "/DetailProduct/:id",
    exact: false,
    main: () => <DetailProduct />
  },

  {
    path: '/Product',
    exact: false,
    main: () => <ProductItem />
  },
  {
    path: '/Search',
    exact: false,
    main: () => <Search />
  },
  {
    path: '/Checkout',
    exact: false,
    main: () => <Checkout />
  },
  {
    path: '/HotelCheckout',
    exact: false,
    main: () => <HotelCheckout />
  },
  {
    path: '/Login',
    exact: false,
    main: () => localStorage.getItem("loginSuccess") ? <Content /> : <LoginAuth />
  },
  {
    path: '/Signin',
    exact: false,
    main: () => <RegisterAuth />
  },
  {
    path: '/Hotel',
    exact: false,
    main: () => <Hotel />
  },
  {
    path: '/HomeStay',
    exact: false,
    main: () => <HomeStay />
  },
  {
    path: "/DetailHotel/:id",
    exact: false,
    main: () => <DetailHotel />
  },
  {
    path: '/Restaurant',
    exact: false,
    main: () => <Restaurant />
  },
  {
    path: '/Vehicle',
    exact: false,
    main: () => <Vehicle />
  },
  {
    path: '/SearchTxt',
    exact: false,
    main: () => <SearchTxt />
  },
  {
    path: '/SearchMain',
    exact: false,
    main: () => <SearchMain />
  },
  {
    path: '/Result',
    exact: false,
    main: () => <Result />
  },
  {
    path: '/CreateTour',
    exact: false,
    main: () => <CreateTour />
  },
  {
    path: '/Create',
    exact: false,
    main: () => <Create />
  },
  {
    path: '/Create2',
    exact: false,
    main: () => <Create2 />
  },
  {
    path: '/PersonalPage',
    exact: false,
    main: () => <PersonalPage />
  },
  {
    path: '/BookingTourSuccess',
    exact: false,
    main: () => <BookingTourSuccess />
  },
  {
    path: '/BookingHotelSuccess',
    exact: false,
    main: () => <BookHotelSuccess />
  },
  {
    path: '/CategoryList/:id',
    exact: false,
    main: () => <CategoryList />
  },
  {
    path: '/PostList/:id',
    exact: false,
    main: () => <PostList />
  },
]

export default RouterControl;



  //Router cũ

  // return (
  //   <div>


  //     {/* <Router>

  //       <Switch>

  //         <Route exact path='/'><Content/>  </Route>
  //         <Route path="/DetailProduct/:id" ><DetailProduct /></Route>

  //         <Route path='/Product'><ProductItem /></Route>
  //         <Route path='/Search'><Search /> </Route>
  //         <Route path='/Checkout'><Checkout/> </Route>
  //         <Route path='/HotelCheckout'><HotelCheckout/> </Route>
  //         <Route path='/Login'><Login/>  </Route>
  //         <Route path='/Signin'><Signin/> </Route>

  //         <Route path='/LoginAuth'> <LoginAuth/>  </Route>

  //         <Route path='/Hotel'><Hotel/> </Route>
  //         <Route path="/DetailHotel/:id" ><DetailHotel /></Route>
  //         <Route path='/Restaurant'><Restaurant/></Route>
  //         <Route path='/Vehicle'><Vehicle/> </Route>
  //         <Route path='/SearchTxt'> <SearchTxt/> </Route>
  //         <Route path='/SearchMain'> <SearchMain/> </Route>
  //         <Route path='/Result'><Result/> </Route>
  //       </Switch>
  //     </Router> */}



  //   </div>
  // )

