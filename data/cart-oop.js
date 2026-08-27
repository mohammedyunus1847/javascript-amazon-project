

function Cart(localstorageKey){
    const cart={
    cartItems:undefined,
    loadFromStorage: function(){
    this.cartItems=JSON.parse(localStorage.getItem(localstorageKey))


        if(!this.cartItems){
            this.cartItems=[{
            productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity:2,
            deliveryOptionId:'1'
            },
            {
            productId:"15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity:1,
            deliveryOptionId:'2'
            }

        ];
       
    }},
    

    saveTostorage: function(){
    localStorage.setItem(localstorageKey,JSON.stringify(this.cartItems))
    },
    addToCart: function(productId){
    let matchingItem;
        this.cartItems.forEach((cartitem)=>{
            if(productId===cartitem.productId){
                matchingItem=cartitem;


            }
        })

        if(matchingItem){
            matchingItem.quantity+=1

        }else{
            this.cartItems.push({
            productId:productId,
            quantity:1,
            deliveryOptionId:'1'
            });
        }
        this.saveTostorage();
    },
    removeCart: function (productId){
    const newCart=[];
    this.cartItems.forEach((cartItem)=>{
        if(cartItem.productId!==productId){
            newCart.push(cartItem);
        }
    });
    this.cartItems=newCart;

    this.saveTostorage();
    },
    updateQuantity: function(productId,newquantity){
    let matchingItem;
    this.cartItems.forEach((cartitem)=>{
        if(productId===cartitem.productId){
            matchingItem=cartitem
        }
    });
    matchingItem.quantity=newquantity;
    this.saveTostorage();

    },
    UpdateDeliveryOption:function(productId,deliveryOptionId){
    console.log('productId from HTML:', productId);
    console.log('deliveryOptionId:', deliveryOptionId);
    console.log('cart:', this.cartItems);
    let matchingItem;
        this.cartItems.forEach((cartitem)=>{
            if(productId===cartitem.productId){
                matchingItem=cartitem;


            }
        });
        if(!validDeliveryOption(deliveryOptionId)){
            return;
        }
    matchingItem.deliveryOptionId=deliveryOptionId;
    this.saveTostorage();

    }
}
return cart;

}



const cart = Cart('js-oop');
const buissnesCart=Cart('js-oop')
cart.loadFromStorage()
cart.addToCart('e4113638ce-6aa0-4b85-b27f-e1d07eb678c6')
console.log(cart)
console.log(buissnesCart);






