import React from 'react'
import { Outlet } from 'react-router-dom'
import {Footer,Header }from '../components/comps'

export const MainLayOut = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}