
export let cart=JSON.parse(localStorage.getItem('cart'))


if(!cart){
    cart=[{
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    Quantity:2,
    deliveryOptionId:'1'
    },
    {
    productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
    Quantity:1,
    deliveryOptionId:'2'
    }

];

}


function saveTostorage(){
    localStorage.setItem('cart',JSON.stringify(cart))
}

export function addToCart(productId){
    let matchingItem;
        cart.forEach((cartitem)=>{
            if(productId===cartitem.productId){
                matchingItem=cartitem;


            }
        })

        if(matchingItem){
            matchingItem.Quantity+=1

        }else{
            cart.push({
            productId:productId,
            Quantity:1,
            deliveryoption:'1'
            });
        }
        saveTostorage();
}

export function removeCart(productId){
    const newCart=[];
    cart.forEach((cartItem)=>{
        if(cartItem.productId!==productId){
            newCart.push(cartItem);
        }
    });
    cart=newCart;

    saveTostorage();
}

export function updateQuantity(productId,newQuantity){
    let matchingItem;
    cart.forEach((cartitem)=>{
        if(productId===cartitem.productId){
            matchingItem=cartitem
        }
    });
    matchingItem.quantity=newQuantity;
    saveTostorage();

}

export function UpdateDeliveryOption(productId,deliveryOptionId){
    console.log('productId from HTML:', productId);
    console.log('deliveryOptionId:', deliveryOptionId);
    console.log('cart:', cart);
    let matchingItem;
        cart.forEach((cartitem)=>{
            if(productId===cartitem.productId){
                matchingItem=cartitem;


            }
        });
    matchingItem.deliveryOptionId=deliveryOptionId;
    saveTostorage();

}