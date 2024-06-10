import React from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"


export default function Layout() {
  return (
    <>
      <Header />
      <h1>This is the Layout Route</h1>
      <Outlet />
    </>
  )
}
