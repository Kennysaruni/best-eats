import React, { useState } from 'react'
import { data } from '../data/data'

const Food = () => {
  const [foods,setFoods] = useState(data)
  //Filter
  const filterType = (category)=>(
    setFoods(
      data.filter((item) => {
        return item.category === category
      }))
  )

  const filterPrice = (price) => (
    setFoods(
      data.filter((item) => {
        return item.price === price
      })
    )
  )
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12 '>
      <h1 className="text-orange-600 font-bold text-4xl text-center">Top Rated Menu Item</h1>

      {/* Filter Row    */}
      <div className="flex flex-col lg:flex-row justify-between">

        {/* Filter Type  */}
        <div className="">
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button onClick={() => setFoods(data)} className="m-3 border-black text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1 ">All</button>
            <button onClick={() => filterType('burger')} className="m-3 border-black text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1 ">Burgers</button>
            <button onClick={() => filterType('pizza')} className="m-3 border-black text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1  ">Pizza</button>
            <button onClick={() => filterType('salad')} className="m-3 border-black text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1  ">Salads</button>
            <button onClick={() => filterType('chicken')} className="m-3 border-black text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1 ">Chicken</button>
          </div>
        </div>
      </div>

      {/* Filter Price  */}
      <div className="">
        <p className="font-bold text-gray-700">Filter Price</p>
        <div className="flex justify-between max-w-[390px] w-full ">
          <button onClick={() => filterPrice('$')} className="m-3 border-black text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1">$</button>
          <button onClick={() => filterPrice('$$')} className="m-3 border-black text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1">$$</button>
          <button onClick={() => filterPrice('$$$')} className="m-3 border-black text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1">$$$</button>
          <button onClick={() => filterPrice('$$$$')} className="m-3 border-black text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-1">$$$$</button>
        </div>
      </div>

      {/* Display Foods  */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item,index) => (
          <div className="border shadow-lg rounded-lg hover:scale-105 duration-300" key={index-1}>
            <img src={item?.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold ">{item.name}</p>
              <p className="">
                <span className="bg-orange-500 text-white p-1 rounded-full">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Food