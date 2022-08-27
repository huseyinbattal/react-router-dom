import React from 'react'
import { useSearchParams,useLocation } from 'react-router-dom'

function QueryParamsViews() {
    const location=useLocation()
    const [serachParams] = useSearchParams()
    console.log("searchParams", serachParams.getAll("w"))
    console.log(location)
  return (
      <div>QueryParamsViews
          <br />
          {serachParams.getAll("w")}
    </div>
  )
}

export default QueryParamsViews