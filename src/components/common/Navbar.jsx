import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isLogin, setIsLogin] = useState(false)
    return <>
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Ecom</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li>
        <details className="dropdown">
  <summary className=" ">Categories</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
    <li><Link to="/categories">Browse All Categories</Link></li>
    <li><Link to="/categories/electronics">Electronics</Link></li>
              <li><Link to="">Fashion</Link></li>
              <li><Link to="/">Home & Kitchen</Link></li>
              <li><Link to="/">Beauty & Personal Care</Link></li>
              <li><Link to="/">Sports & Outdoors</Link></li>
              <li><Link to="/">Books & Media</Link></li>
              <li><Link to="/">Toys & Games</Link></li>
              <li><Link to="/">Health & Wellness</Link></li>
              <li><Link to="/">Automotive</Link></li>
              <li><Link to="/">Grocery</Link></li>
  </ul>
</details>
      </li>
      <li><a>Trending </a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <div className="flex gap-6">
    <div className="form-control">
      <input type="text" placeholder="Search Products" className="input input-bordered w-24 sm:w-64  " />
    </div>
                    {
                        isLogin ? <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div> : <Link path='/login' className='btn'>Login </Link>
    }
  </div>
  </div>
</div></>
}

export default Navbar
