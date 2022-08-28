import React from 'react'
import { Outlet } from 'react-router-dom'

function NewView() {
  return (
      <div>
          Haberler Sayfası
          <div>
              Spor Haberlerinin Gösterileceği Yer
          </div>
          <Outlet/>
      </div>
  )
}

export default NewView