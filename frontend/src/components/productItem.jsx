import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext';
import {Link} from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const {currency} = useContext(ShopContext);
  const displayImage = image && image.length > 0 ? image[0] : 'defaultImagePath'; // Provide a default image path

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={displayImage} alt={name} />
        </div>
        <p className='pt-3 pb-1 text-small'>{name}</p>
        <p className='text-sm font-medium'>{currency}{price}</p>
    </Link>
  )
}

export default ProductItem