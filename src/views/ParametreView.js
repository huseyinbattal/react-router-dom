import React from 'react'
import { useParams } from 'react-router-dom'

function ParametreView() {
  const {id} = useParams()
  
  return (
    <div>Parametre Sayfası<br/>
      Gelen Parametre {id}
    </div>
  )
}

export default ParametreView