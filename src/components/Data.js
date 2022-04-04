import React, {createContext, useState, useEffect} from 'react'

export const DataContext = createContext();

export const Data = (props) => {
    const [products, setProducts] = useState([]);


  
  useEffect(() => {


    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

    const [cart, setCart] = useState([])

    const addCart = (id) =>{
        const check = cart.every(item =>{
            return item.id !== id
        })
         if(check){
            const data = products.filter(product =>{
                return product.id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("Exclusive stuff, Please add more in the next step")
        } 
    }

    useEffect(() =>{
       const dataCart =  JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])


    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart
    }

    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}
