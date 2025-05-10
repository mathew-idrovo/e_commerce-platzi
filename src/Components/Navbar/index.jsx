import React from 'react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingCartContext } from '../../Context'
import { ShoppingBagIcon } from '@heroicons/react/16/solid'
import { ShoppingCart } from '../ShoppingCart'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)

  const activeStyle = 'underline underline-offset-4'

  const singOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(singOut)
  const isUserSignOut = context.singOut || parsedSignOut
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true)
    localStorage.setItem('sign-out', stringifiedSignOut)
    context.setSingOut(true)
  }
  const noAccountInLocalStorage = parsedAccount
    ? Object.keys(parsedAccount).length === 0
    : true
  const noAccountInLocalState = parsedAccount
    ? Object.keys(context.account).length === 0
    : true
  const hasUserAnAccount = !noAccountInLocalState || !noAccountInLocalStorage

  const renderView = () => {
    if (!isUserSignOut && hasUserAnAccount) {
      return (
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => handleSignOut()}
          >
            Sign out
          </NavLink>
        </li>
      )
    } else {
      return (
        <>
          <li className="text-black/60">{parsedAccount?.email}</li>
          <li>
            <NavLink
              to="/my-orders"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-account"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sign-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={() => handleSignOut()}
            >
              Sign out
            </NavLink>
          </li>
        </>
      )
    }
  }
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to={`${isUserSignOut ? '/sign-in' : '/'}`}>Shopi</NavLink>
        </li>
        <li className="font-semibold text-lg">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>{' '}
        <li className="font-semibold text-lg">
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li className="font-semibold text-lg">
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li className="font-semibold text-lg">
          <NavLink
            to="/furnitures"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furtinures
          </NavLink>
        </li>
        <li className="font-semibold text-lg">
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li className="font-semibold text-lg">
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        {renderView()}
        <li className="flex items-center">
          <ShoppingCart />
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
