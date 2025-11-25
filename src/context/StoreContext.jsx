"use client";
import { assets, food_list, menu_list } from "@/assets/assets";
import { createContext, useState } from "react";


export const StoreContext = createContext();

const StoreContextProvider = (props)=>{
    const [cart, setCart] = useState({});

    const addToCart = (itemId)=>{
        if (!cart[itemId]){
            setCart((prev)=>({...prev, [itemId]:1}))
        }else{
            setCart((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        }
    };
    const removeCart = (itemId)=>{
            setCart((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalCart = ()=>{
        let sumTotalCart = 0;
        for(let itemId in cart){
            if (cart[itemId] > 0) {
                const itemInfo = food_list.find((product)=>product._id === itemId);
                sumTotalCart += itemInfo.price * cart[itemId];
            }
        }
        return sumTotalCart;
    }


    const value = {
        food_list,
        menu_list,
        cart,
        addToCart,
        removeCart,
        getTotalCart
    };

    return (
        <StoreContext.Provider value={value}>
            {props.children}
        </StoreContext.Provider>
    )
};
export default StoreContextProvider;