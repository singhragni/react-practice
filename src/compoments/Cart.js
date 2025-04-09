import { useDispatch, useSelector } from "react-redux";
import {clearItem} from "../utils/cartSlice"
import Menu from "./Menu";

const Cart = ()=>{

    // if u want to data from slice then first subscribe to the cart. 
    /// we subscribe the cart using useSelector.
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClear = () =>{
        dispatch(clearItem())
    }
    return (
        <>
        <div className="text-center m-4 p-4">
        <h1 className="text-2xl">Cart</h1>
        <button className="m-2 p-2 bg-black  text-white rounded-lg" onClick = {handleClear}>Clear Cart
            
        </button>
        {cartItems.length === 0 && <h1>Cart is emppty, Add items to the cart</h1>}
        <Menu items={cartItems}/>
        </div>
        
        </>
    )
}

export default Cart;