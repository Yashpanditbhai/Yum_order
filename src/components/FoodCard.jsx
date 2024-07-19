import React from 'react'
import { CiStar } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slices/CartSlice';
import { ImGithub } from 'react-icons/im';


const FoodCard = ({id,name,price,desc,rating, img, handleToast}) => {
    const dispatch = useDispatch();

    return (
        <div className='font-bold w-[250px] p-5 bg-white flex flex-col gap-2 rounded-lg'>
            <img src={img} 
            className='w-autp h-[130px] hover:scale-110 cursor-grab transition-all duration-500
            ease-in-out '
            alt="" />
        <div className='text-sm flex justify-between'>
           <h2>{name}</h2> 
           <span className='text-green-500'>{price}</span>
        </div >
        <p className='text-sm font-normal'>
            {desc.slice(0,50)}...</p>
        <div className='flex justify-between'>
            <span className='flex justify-center items-center'>
                <CiStar className='mr-1 text-yellow-500' />{rating} 
                </span> 
            <button onClick={()=>{dispatch(addToCart({ id,name,price,rating,qty:1 ,img}))
            handleToast(name);
        }
            } className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'>Add to cart</button>
        </div>
        </div>
        
    )
}

export default FoodCard