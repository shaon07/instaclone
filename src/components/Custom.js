import React from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'

const Custom = () => {
    const {tag} = useParams()
  return (
    <div>
      <Header />
      <div className='centerItem'>
        <h1>This is {tag} page</h1>
      </div>
    </div>
  )
}

export default Custom
