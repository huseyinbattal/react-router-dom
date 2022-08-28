import React from 'react'
import { useParams } from 'react-router-dom'

function EconomyNewsView() {
    const {id}=useParams()
  return (
    <div>Ekonomi Haberleri</div>
  )
}

export default EconomyNewsView