import {useQuery} from "@tanstack/react-query";
import getCartItems from "@/features/shopping-cart/utils/get-cart-items";
import queryClient from "@/utils/react-query";

const useInCartQuantity = (productId: number) => {
    return useQuery({
        queryKey:["cart", "quantity", productId],
        queryFn: ()=>{
            const items = getCartItems()

            return items.find(i => i.productId == productId)?.quantity ?? 0;
        }
    }, queryClient)
}

export default useInCartQuantity;