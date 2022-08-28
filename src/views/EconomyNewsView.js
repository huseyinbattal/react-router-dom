import React from 'react'
import { Outlet,useParams } from 'react-router-dom'

function EconomyNewsView() {
    const {id}=useParams()
  return (
    <div><Outlet/> {id} </div>
  )
}

export default EconomyNewsView