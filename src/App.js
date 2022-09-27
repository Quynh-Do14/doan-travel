import React, { useEffect, useState } from 'react';

// import './App.css';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { useRoutes } from "react-router-dom";
import ProductItem from './components/Product/Product';

import DetailProduct from './components/ProductDetail/DetailProduct';
import MainPage from './components/MainPage/MainPage';
import SearchTxt from './components/Search/SearchTxt';
import Login from './Login/Login';
import Signin from './Login/Signin';

import Vehicle from './components/Product/Vehicle/Vehicle';
import { Routes } from 'react-router';

import Search from './components/Search/Search';
import Checkout from './components/Checkout/Checkout';
import HotelCheckout from './components/HotelCheckout/HotelCheckout';
import Hotel from './components/Product/Hotel/Hotel';
import DetailHotel from './components/Product/Hotel/DetaiHotel/DetailHotel';
import { Restaurant } from './components/Product/Restaurant/Restaurant';
import SearchMain from './components/Search/Searchmain/SearchMain';
import Content from './components/MainPage/Content';


// import Router from './components/Product/Router/Router';
// const AppSwap = () => {
//   let routes = useRoutes([
//           {path:'/', element:<Content/>},
//           {path:"/DetailProduct/:id", element:<DetailProduct />},

//           {path:'/Product', element:<ProductItem />},
//           {path:'/Search', element:<Search />},
//           {path:'/Checkout', element:<Checkout />},
//           {path:'/HotelCheckout', element:<HotelCheckout />},

//           {path:'/Login2', element:<Login2 /> },
//           {path:'/Signin2', element:<Signin2 /> },
//           {path:'/Login', element:<Login /> },
//           {path:'/Signin', element:<Signin />},
//           {path:'/Hotel', element:<Hotel /> },
//           {path:"/DetailHotel/:id", element:<DetailHotel />},
//           {path:'/Restaurant', element:<Restaurant />},
//           {path:'/Vehicle', element:<Vehicle />},
//           {path:'/SearchTxt', element:<SearchTxt />}, 
//           {path:'/SearchMain', element:<SearchMain />},
//   ]);
//   return routes;
// };


function App() {

      const showRouter = (router) => {
        var result = '';
        if (router.length > 0) {
            result = router.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />)
            })
        }
        return (
            <Switch>{result}</Switch>
        )
    }
  return (
    <div className="index">
      {/* <BrowserRouter>
        <Router>
          <Routes>
            <Route exact path='/' element={<Content />} />
            <Route path="/DetailProduct/:id" element={<DetailProduct />} />

            <Route path='/Product' element={<ProductItem />} />
            <Route path='/Search' element={<Search />} />
            <Route path='/Checkout' element={<Checkout />} />
            <Route path='/HotelCheckout' element={<HotelCheckout />} />
            <Route path='/Login2' element={<Login2 />} />
            <Route path='/Signin2' element={<Signin2 />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signin' element={<Signin />} />
            <Route path='/Hotel' element={<Hotel />} />
            <Route path="/DetailHotel/:id" element={<DetailHotel />} />
            <Route path='/Restaurant' element={<Restaurant />} />
            <Route path='/Vehicle' element={<Vehicle />} />
            <Route path='/SearchTxt' element={<SearchTxt />} />
            <Route path='/SearchMain' element={<SearchMain />} />

          </Routes>
        </Router>
      </BrowserRouter> */}
             <Router>

            <div className="outer">
                <div className="inner">
                    {showRouter(MainPage)}
                </div>
            </div>
        </Router>
    </div>
  );
};

export default App;
