import {addToCart,cart,loadFromStorage,removeCart,UpdateDeliveryOption} from '../../data/cart.js'

describe('Test Suite : addToCart',()=>{
    beforeEach(()=>{
        spyOn(localStorage,'setItem')
    })
    it('adds new product to the cart',()=>{
    
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([{
                productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity:1,
                deliveryOptionId:'1'
        }]);
        });
        loadFromStorage(); 

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(localStorage.setItem).toHaveBeenCalledWith('cart', JSON.stringify([{
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    }]));
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(2);
    });
    
    it('adds a new produt to the cart',()=>{
        spyOn(localStorage,'getItem').and.callFake(()=>{
            return JSON.stringify([]);

        });
        loadFromStorage(); 

    
        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart[0].quantity).toEqual(1);
    });

    it('remove from cart ',()=>{
            spyOn(localStorage,'getItem').and.callFake(()=>{
                return JSON.stringify([{
                    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity: 1,
                    deliveryOptionId: '1'
                }])
            })
            loadFromStorage();
            removeCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
            expect(cart.length).toEqual(0)
            expect(localStorage.setItem).toHaveBeenCalledTimes(1);
            expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([]));
        });
        it('does nothing if product is not in cart ',()=>{
             spyOn(localStorage,'getItem').and.callFake(()=>{
                return JSON.stringify([{
                    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity: 1,
                    deliveryOptionId: '1'
                }])
            });
            loadFromStorage();
            removeCart('does-not-exist');
            expect(cart.length).toEqual(1);
            expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
            expect(cart[0].quantity).toEqual(1);
            expect(localStorage.setItem).toHaveBeenCalledTimes(1);
            expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1' 
            }

            ]))

            
        });

        it('update delivery option',()=>{
            spyOn(localStorage,'getItem').and.callFake(()=>{
                return JSON.stringify([{
                    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity: 1,
                    deliveryOptionId: '1' 
                }]);

            })
            loadFromStorage()
            UpdateDeliveryOption('e43638ce-6aa0-4b85-b27f-e1d07eb678c6','3')
            expect(cart.length).toEqual(1);
            expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
            expect(cart[0].quantity).toEqual(1);
            expect(cart[0].deliveryOptionId).toEqual('3');
            expect(localStorage.setItem).toHaveBeenCalledTimes(1);
            expect(localStorage.setItem).toHaveBeenCalledWith('cart',JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '3' 
            }]))
        })
         it('does nothing if the delivery option does not exist', () => {
                spyOn(localStorage, 'getItem').and.callFake(() => {
                return JSON.stringify([{
                    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                    quantity: 1,
                    deliveryOptionId: '1'
                }]);
                });
                loadFromStorage();

                 UpdateDeliveryOption('e43638ce-6aa0-4b85-b27f-e1d07eb678c6', 'does-not-exist');
                expect(cart.length).toEqual(1);
                expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
                expect(cart[0].quantity).toEqual(1);
                expect(cart[0].deliveryOptionId).toEqual('1');
                expect(localStorage.setItem).toHaveBeenCalledTimes(0);
            });


});