import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import "./header.scss"

import logo from "../../assets/net.svg"
import { useLocation } from 'react-router-dom';

const headerNav=[{
    display:"Home",
    path:'/'
},{
    display:"Movies",
    path:"/movie"
},{
    display:"TV Series",
    path:'/tv'
}
]

const Header = () => {

    const{pathname}=useLocation();
    const headerRef=useRef(null);

    const active=headerNav.findIndex(event=>event.path===pathname)

    useEffect(()=>{
        const shrinkHeader=()=>{
            if(document.body.scrollTop>100|| document.documentElement.scrollTop>100){
                headerRef.current.classList.add('shrink');
            }else{
                headerRef.current.classList.remove("shrink")
            }
            
        }
        window.addEventListener('scroll',shrinkHeader)
        return ()=>{
            window.removeEventListener('scroll',shrinkHeader)
        }
    },[])

    return (
        <div ref={headerRef} className="header">
            <div className='header__wrap container'>
                <div className='logo'>
                 <img src={logo} alt="logo"/>
                 <Link to="/">Movie-Net</Link>
                </div>
                <ul className="header__nav">
                {
                    headerNav.map((event,i)=>(
                        <li key={i} className={`${i===active?'active':''}`}>
                            <Link to={event.path}>
                                {event.display}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            </div>

        </div>
    );
};

export default Header;