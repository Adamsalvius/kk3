import React, {useContext} from 'react'
import {DataContext} from './Data'
import {Link} from 'react-router-dom'

export default function Products() {
    const value = useContext(DataContext)
    const [products] = value.products
    const addCart = value.addCart

    return (
        <div className="products">
            {
                products.map(product =>(
                    <div className="card" key={product.id}>
                        <Link to={`/products/${product.id}`}>
                            <img src={product.images[0]} alt=""/>
                        </Link>
                        <div className="box">
                        <h3 title={product.title}>
                            <Link to={`/products/${product.id}`}>{product.title}</Link>
                        </h3>
                        <p>{product.description}</p>
                        <h4 className='Price'>USD {product.price}</h4>
                        <button className="addto" onClick={() => addCart(product.id)}>
                            Add to cart
                        </button>
                        </div>
                    </div>
                ))
            }
          
          
        </div>
    )
}
