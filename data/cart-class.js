class Cart {

    cartItems;                //it is called Public Property of class//
    #localstorageKey;        //if we use # it is called private property of class//
    
    
    constructor(localstorageKey){
        this.#localstorageKey=this.localstorageKey;
        this.#loadFromStorage();
    }

    #loadFromStorage() {
        this.cartItems = JSON.parse(
            localStorage.getItem(this.#localstorageKey)
        );

        if (!this.cartItems) {
            this.cartItems = [
                {
                    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    quantity: 2,
                    deliveryOptionId: "1"
                },
                {
                    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                    quantity: 1,
                    deliveryOptionId: "2"
                }
            ];
        }
    }

    saveTostorage() {
        localStorage.setItem(
            this.#localstorageKey,
            JSON.stringify(this.cartItems)
        );
    }

    addToCart(productId) {
        let matchingItem;

        this.cartItems.forEach((cartitem) => {
            if (productId === cartitem.productId) {
                matchingItem = cartitem;
            }
        });

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            this.cartItems.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId: "1"
            });
        }

        this.saveTostorage();
    }

    removeCart(productId) {
        const newCart = [];

        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });

        this.cartItems = newCart;
        this.saveTostorage();
    }

    updateQuantity(productId, newquantity) {
        let matchingItem;

        this.cartItems.forEach((cartitem) => {
            if (productId === cartitem.productId) {
                matchingItem = cartitem;
            }
        });

        if (!matchingItem) {
            return;
        }

        matchingItem.quantity = newquantity;
        this.saveTostorage();
    }

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;

        this.cartItems.forEach((cartitem) => {
            if (productId === cartitem.productId) {
                matchingItem = cartitem;
            }
        });

        if (!validDeliveryOption(deliveryOptionId)) {
            return;
        }

        if (!matchingItem) {
            return;
        }

        matchingItem.deliveryOptionId = deliveryOptionId;
        this.saveTostorage();
    }
}

export const cart = new Cart('cart-oop');
const buissnesCart= new Cart('js-loop')
console.log(buissnesCart);


