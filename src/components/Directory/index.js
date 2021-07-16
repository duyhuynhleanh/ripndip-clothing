import React from 'react'
import ShopMen from './../../assets/men.jpg'
import ShopWomen from './../../assets/women.jpg'
import './styles.scss'

const Directory = (props) => {
  return (
    <div className='directory'>
      <div className='wrap'>
        <div
          className='item'
          style={{
            backgroundImage: `url(${ShopWomen})`,
          }}
        >
          <a href='/'>Shop Womens</a>
        </div>
        <div
          className='item'
          style={{
            backgroundImage: `url(${ShopMen})`,
          }}
        >
          <a href='/'>Shop Mens</a>
        </div>
      </div>
    </div>
  )
}

export default Directory
