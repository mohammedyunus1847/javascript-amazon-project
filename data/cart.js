export const cart=[];

export function addToCart(productId){
    let matchingItem;
        cart.forEach((cartitem)=>{
            if(productId===cartitem.productId){
                matchingItem=item;
            }
        })

        if(matchingItem){
            matchingItem.Quantity+=1

        }else{
            cart.push({
            productId:productId,
            Quantity:1
            });
        }
}