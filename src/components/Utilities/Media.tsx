import React from 'react'

function Media({url} : {url: string}) {
  return (
    
        <img src={url} alt="" className="w-full object-contain"/>
    
  )
}

export default Media