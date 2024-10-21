const getStoredCart = ()=>{
    const storedCartString= localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return[];
}

// save to local Storage 

const saveCartToLs = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const addToLocalStorage = id =>{
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLs(cart);
}

const removeFromLs = id =>{
    const cart = getStoredCart();
    // removing every id 
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLs(remaining)
}

export {addToLocalStorage, getStoredCart, removeFromLs}