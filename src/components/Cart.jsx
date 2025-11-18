import { useSelector } from "react-redux";
import Itemlist from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../Redux/Slices/cartSlice";


const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartitems in cart: ", cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <div className="mt-5 text-center">
      <div className="flex justify-center items-center gap-4">
        <div className="text-center font-bold text-4xl ">Cart Items</div>
        <button onClick={() => handleClearCart()} className="bg-black text-white p-3 m-2 rounded-lg" >Clear Cart</button>
      </div>

    {
        cartItems.length === 0 && (
            <h1>Cart is Empty!!!! DO some shopping MAN......</h1>
        )
    }

      {/* <div className="flex flex-wrap gap-5 justify-center ">
        {cartItems.map((item) => (
          <div
            key={item.card.info.id}
            className="border border-black w-[200px] h-[400px] shadow-lg rounded-lg hover:cursor-pointer hover:scale-[1.01] transition-all duration-100 bg-gray-200"
          >
            <img
              className=" w-[200px] rounded-md"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
            />
            <div className="mt-5 font-bold flex flex-wrap text-left ml-1">
                <div>Name: {item.card.info.name} </div>
                <div>{item.card.info.areaName}</div>
                <div>Price: ${item.card.info.price/100}</div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="w-6/12 m-auto ">
        <Itemlist itemCards={cartItems} isCart={true} />
      </div>
    </div>
  );
};

export default Cart;
