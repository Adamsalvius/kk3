import React,{useContext, useState, useEffect} from 'react'
import {DataContext} from './Data'
import {Link} from 'react-router-dom'

export default function Cart() {
    const value = useContext(DataContext)
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0)


    useEffect(() =>{
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.count)
            },0)
            setTotal(res)
        }
        getTotal()
    },[cart])

    const reduction = id => {
        cart.forEach(item =>{
            if(item.id === id){
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart])
    }
    const increase = id => {
        cart.forEach(item =>{
            if(item.id === id){
                item.count += 1 ;
            }
        })
        setCart([...cart])
    }

    const removeProduct = id => {
        if(window.confirm("are you sure?")){
            cart.forEach((item, index) => {
                if(item.id === id){
                    cart.splice(index, 1)
                }
            })
            setCart([...cart])
        }
    }
    

    if(cart.length === 0)
        return <h2 className="empty">Cart Empty</h2>

    return (
        <>
            <h1>CART</h1>
           {
               cart.map(product =>(
                   <div className="details cart" key={product.id}>
                       <div className="imgcard" 
                       style={{backgroundImage: `url(${product.image})`}} />

                       <div className="boxcard">
                           <h3 title={product.title}>{product.title}</h3>
                           <h3 className='Price'> {product.price} USD</h3>
                          {/*  <Colors colors={product.colors} /> */}
                        {/*    <Sizes sizes={product.sizes} /> */}
                           <p>{product.description}</p>
                           <p>{product.content}</p>
                           
                           <div className="amount">
                               <button className="count" onClick={() => reduction(product.id)}> - </button>
                               <span>{product.count}</span>
                               <button className="count" onClick={() => increase(product.id)}> + </button>
                           </div>

                           <div className="delete" onClick={() => removeProduct(product.id)}>⌄ Remove from cart</div>
                       </div>

                   </div>
               ))
           }

           <div className="total">
               
           <h3>Total: $ {total}</h3>
               <Link to="/payment">Checkout</Link>
           </div>
        </>
    )
}
