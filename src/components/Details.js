import React,{useContext, useState, useRef} from 'react'
import {useParams} from 'react-router-dom'
import {DataContext} from './Data'
import {Link} from 'react-router-dom'

export default function Details() {
    const {id} = useParams();
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart
    
    const [index, setIndex] = useState(0)
    const imgdiv = useRef();


    const details = products.filter((product, index) =>{
        return product.id === id
    })




    return (
        <>
           {
               details.map(product =>(
                   <div className="details" key={product.id}>
                       <div className="imgcard" 
                       style={{backgroundImage: `url(${product.images[index]})`}} ref={imgdiv} 
                        />

                       <div className="boxcard">
                           <h2 title={product.title}>{product.title}</h2>
                            <h3 className='Price'>{product.price} USD</h3>
                         
                                <p>{product.description}</p>
                                    <p>{product.content}</p>
                          
                           <Link to="/cart" className="cart" onClick={() => addCart(product.id)}>
                               Add to cart
                            </Link>
                       </div>

                   </div>
               ))
           }
        </>
    )
}
