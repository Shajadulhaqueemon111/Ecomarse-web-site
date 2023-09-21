import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer'
import Spiner from '../Components/Spiner';

const MainLayout = () => {
    const navigation =useNavigation()
   
    const text =
    navigation.state === "submitting"
      ? "Saving..."
      : navigation.state === "loading" 
      ? "Saved!"
      : "Go";
       console.log(text.state==='loading')
    return (
        <div>
            <section className='flex justify-between px-10 shadow-md py-7'>
                <div>
                    <h2 className='text-2xl'>Amajhon</h2>
                </div>
             <nav>
                <ul className='flex gap-5'>
                <NavLink
          to="/"
        className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-yellow-200" : ""
  }
>
 Home
 </NavLink>
                <NavLink
          to="/products"
        className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-green-300" : ""
  }
>
 Products
 </NavLink>
                <NavLink
          to="/dasboard"
        className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "bg-red-300" : ""
  }
>
 Dasboard
</NavLink>
                </ul>
             </nav>
     
   
  </section>
  <Outlet></Outlet>
  <Spiner></Spiner>
  
<Footer></Footer>

        </div>
    );
};

MainLayout.propTypes = {
    
};

export default MainLayout;