function Product({productdata , addcart}){
    return(
    <>
    <h1>{productdata.name}</h1>
    <h1>{productdata.price}</h1>
    <button onClick={addcart}>ADD TO CART</button>
    </>
    )
}

export default Product;