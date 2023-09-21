import React from 'react';
import PropTypes from 'prop-types';
import { Link, Outlet } from "react-router-dom";
const DasboardLayout = props => {
    return (
        <div className='flex'>
            <div className='w-[20%] bg-red-200'>
                <ul>
                    <li>
                        <Link to="/dasboard">Dasboard</Link>
                    </li>
                    <li>
                    <Link to="/dasboard/profile">Profile</Link>
                    </li>
                    <li>
                    <Link to="/dasboard/editProfile">Edit Profile</Link>
                    </li>
                </ul>

            </div>
            <div className='w-[80%]'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

DasboardLayout.propTypes = {
    
};

export default DasboardLayout;