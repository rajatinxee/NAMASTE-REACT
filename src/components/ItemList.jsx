import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../Redux/Slices/cartSlice";


const Itemlist = ({ itemCards, isCart = false }) => {
  console.log(itemCards);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item))
  }

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId))
  }

  return (
    <div>
      {itemCards?.map((item) => (
        <div
          key={item.card.info.id}
          className="flex justify-between border border-solid border-b-gray-400 p-2 m-2 text-left "
        >
          <div className="w-9/12">
            <div>{item.card.info.name} - </div>
            <div>$ {item.card.info.price / 100}</div>
          </div>
          <div className="w-3/12">
            <div className="absolute">
              <button className="p-2 bg-black text-white m-auto shadow-lg rounded-md hover:bg-slate-900 transition-all duration-200"
                onClick={ () => handleAddItem(item)}
              >
                Add +
              </button>
              {isCart && (
                <button className="p-2 bg-red-500 text-white m-auto shadow-lg rounded-md hover:bg-red-600 transition-all duration-200 ml-2"
                  onClick={ () => handleRemoveItem(item.card.info.id)}
                >
                  Remove
                </button>
              )}
            </div>
            <img
              className="w-32 rounded-md"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
            />
          </div>
          {/* <p>{item.card.info.description}</p>         */}
        </div>
      ))}
    </div>
  );
};

export default Itemlist;



