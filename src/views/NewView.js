import React from 'react'
import { Outlet } from 'react-router-dom'

function NewView() {
  return (
      <div>
        
          <Outlet/>
      </div>
  )
}

export default NewView