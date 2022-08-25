import React, { useState } from "react";
import {Link} from 'react-router-dom';
import clsx from "clsx";
import Logo from '../../../../assets/Home'
import { FormattedMessage } from "react-intl";
import{MdKeyboardArrowDown} from 'react-icons/md'
import Courses from "./Meagmenus/Courses";
import Resources from "./Meagmenus/Resources";



const Navbar =(props)=>{
    const [isGet,setIsGet] = useState(false);
    return(
        <div id='navbar' className={clsx(`nav${props.styles}`, isGet ? "nav_Get":"")}>
            <div className="left-side">
                <Link to='/' className="navlogo">
                    <div className="logo-container">
                        <Logo/>
                    </div>
                </Link>
            </div>


            <div className='navHome'>
            <Link to='/'  className='home-link' >
            <FormattedMessage id="home" defaultMessage='home' />
            </Link>
            <div className='line'></div>
                </div>   

                <div className='navCourse'>
                    <Link to='/' className='couse-link'>
                        <FormattedMessage id="course" defaultMessage='Courses'/> 
                        <MdKeyboardArrowDown className='arrow1'/>
                    </Link>
                    
                    <div className='line'></div>
                    <Courses />
                </div>

                <div className='navServices'>
            <Link to='/'  className='Services-link' >
            <FormattedMessage id="services" defaultMessage='Services' />
            </Link>
            <div className='line'></div>
                </div>   

                <div className='navPricing'>
            <Link to='/'  className='pricing-link' >
            <FormattedMessage id="pricing" defaultMessage='Pricing' />
            </Link>
            <div className='line'></div>
                </div>   

                <div className='navRecourses'>
                    <Link to='/' className='recourse-link'>
                        <FormattedMessage id="recourse" defaultMessage='Resources'/> 
                        <MdKeyboardArrowDown className='arrow1'/>
                    </Link>
                    
                    <div className='line'></div>
                    <Resources />
                    </div>


                    <div className='navblog'>
            <Link to='/'  className='blog-link' >
            <FormattedMessage id="blog" defaultMessage='Blog' />
            </Link>
            <div className='line'></div>
                </div>   

                <div className='navAboutUs'>
            <Link to='/'  className='AboutUs-link' >
            <FormattedMessage id="About" defaultMessage='AboutUs' />
            </Link>
            <div className='line'></div>
                </div>   


        </div>
    )

}



export default Navbar