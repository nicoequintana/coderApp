import React from 'react'
import NavBar from './NavBar'

function NavSetup() {

    const categories = [{name: 'Home', link: '/'}, {name: 'Iphones', link: '/products/ip1/'}, {name:'iPads', link:'/products/ipad2'}, {name:'About Us', link:'/aboutus'}]

  return (
    <div>
        <NavBar categories={categories} />
    </div>
  )
}

export default NavSetup