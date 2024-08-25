 
 import React from 'react'
import { NavLink } from 'react-router-dom'
 
 const Navbar = ()=> { 

    const activeStyle = 'underline underline-offset-4'
   return (
     <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light'>
        <ul className='flex items-center gap-3'>
            <li className='font-semibold text-lg'>
                <NavLink to='/'>
                    Shopi
                </NavLink>
            </li>
            <li className='font-semibold text-lg'>
                <NavLink 
                to= '/' 
                className={({isActive})=>
                isActive?  activeStyle : undefined
                }>
                    All
                </NavLink>
            </li> <li className='font-semibold text-lg'>
                <NavLink 
                to= '/clothes' 
                className={({isActive})=>
                isActive?  activeStyle : undefined
                }>
                    Clothes
                </NavLink>
            </li>
            <li className='font-semibold text-lg'>
                <NavLink 
                to= '/electronics' 
                className={({isActive})=>
                isActive?  activeStyle : undefined
                }>
                    Electronics
                </NavLink>
            </li>
            <li className='font-semibold text-lg'>
                <NavLink 
                to= '/furtinures' 
                className={({isActive})=>
                isActive?  activeStyle : undefined
                }>
                    Furtinures
                </NavLink>
            </li>
            <li className='font-semibold text-lg'>
                <NavLink 
                to= '/toys' 
                className={({isActive})=>
                isActive?  activeStyle : undefined
                }>
                    Toys
                </NavLink>
            </li>
            <li className='font-semibold text-lg'>
                <NavLink 
                to= '/others' 
                className={({isActive})=>
                isActive?  activeStyle : undefined
                }>
                  Others
                </NavLink>
            </li>
        </ul>
        <ul className='flex items-center gap-3'>
            <li className='text-blue/60'>
               Matt
            </li>
            <li className='font-semibold text-lg'>
                <NavLink 
                to= '/my-orders' 
                className={({isActive})=>
                isActive?  activeStyle : undefined
                }>
                    My Orders
                </NavLink>
            </li> <li className='font-semibold text-lg'>
                <NavLink 
                to= '/my-account' 
                className={({isActive})=>
                isActive?  activeStyle : undefined
                }>
                    My Account
                </NavLink>
            </li>
            <li className='font-semibold text-lg'>
                <NavLink 
                to= '/sing-in' 
                className={({isActive})=>
                isActive?  activeStyle : undefined
                }>
                    Sing In
                </NavLink>
            </li>
           
        </ul>
     </nav>
   )
 }
 
 export default Navbar