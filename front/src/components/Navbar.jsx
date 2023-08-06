import React from 'react'
import {Breadcrumbs} from '@geist-ui/core'

const Navbar = () => {
  return (
    <div>
         <Breadcrumbs>
  <Breadcrumbs.Item>Home</Breadcrumbs.Item>
  <Breadcrumbs.Item href="/about">Catalog</Breadcrumbs.Item>
  <Breadcrumbs.Item>Page</Breadcrumbs.Item>
</Breadcrumbs>
    </div>
  )
}

export default Navbar