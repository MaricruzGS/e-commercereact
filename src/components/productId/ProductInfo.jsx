import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductCart } from '../../store/slices/cart.slice'
import "./styles/ProductInfo.css"

const positionImages = ["first", "second", "third"]

const ProductInfo = ({product}) => {
   
    const [quantity, setQuantity] = useState(1)
    const [currentImage, setcurrentImage] = useState(0)

    const dispatch = useDispatch()

    const handlePlus = () => {
        setQuantity(quantity + 1)
    }

    const handleMinus = () => {
        const newValue = quantity - 1
        if (newValue >= 1) {
            setQuantity(newValue)
        }
    }

    const handleAddProduct = () => {
      const data = {
        id: product.id,
        quantity: quantity
      }
      dispatch(addProductCart(data))
    }

    const handleClickLeft = () => {
      if (currentImage<=0) {
        setcurrentImage(2)
      }else{
        setcurrentImage(currentImage - 1) 
      }
    }

    const handleClickRight = () => {
      if (currentImage>=2) {
        setcurrentImage(0)
      }else{
        setcurrentImage(currentImage + 1)
      }
    }
 
  return (
    <article className='productInfo'>
      <div className='productInfo__slider'>
        <div className={`productInfo__slider--container ${positionImages[currentImage]}`}>
        <img src={product?.productImgs[0]} alt="" />
        <img src={product?.productImgs[1]} alt="" />
        <img src={product?.productImgs[2]} alt="" />
        </div>
        <i onClick={handleClickLeft} className='productInfo__slider--arrowleft bx bxs-left-arrow'></i>
        <i onClick={handleClickRight} className='productInfo__slider--arrowright bx bxs-right-arrow'></i>
      </div>
      <div className='productInfo__info'>
      <h2 className='productInfo__title'>{product?.title}</h2>
      <p className='productInfo__description'>{product?.description}</p>
      <footer className='productInfo__footer'>
        <div className='productInfo__container--price'>
            <h3 className='productInfo__price--title'>Price</h3>
            <span className='productInfo__price'>{product?.price}</span>
        </div>
        <div className='productInfo__container--quantity'>
            <h3 className='productInfo__quantity--title'>Quantity</h3>
            <div className='productInfo__container--counter'>
                <div className='productInfo__minus' onClick={handleMinus}>-</div>
                <div className='productInfo__counter'>{quantity}</div>
                <div className='productInfo__plus' onClick={handlePlus}>+</div>
            </div>
        </div>
        <button onClick={handleAddProduct} className='productInfo__btn'>Add to cart <i className='bx bx-cart'></i></button>
      </footer>
      </div>
    </article>
  )
}

export default ProductInfo