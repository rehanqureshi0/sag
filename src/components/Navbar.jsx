import React from 'react'
import logo from './../Images/sag_logo.png';
import Menu from './Menu';

function Navbar() {
    return (
        <>
            <div className="container fixed-top">
                <div className="row">
                    <div className="col-md-4">
                        <div className="logo_main_Wrap">
                            <img src={logo} alt="logo" height="90"/>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <Menu />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
