import React from 'react'
import {ApiCategories} from '../apiFolder/CategoryApi'
import Category  from './Category'


function Categories() {
  return (
    <div className='flex justify-between items-center p-5
'>
        {
            ApiCategories.map((category, index)=>{
               return <Category item={category} key={index}/>
            })
        }
    </div>
  )
}

export default Categories