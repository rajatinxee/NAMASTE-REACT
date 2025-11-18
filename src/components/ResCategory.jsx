// accordion
import { useState } from "react";
import Itemlist from "./ItemList";

const ResCategory = ({category, showItems, setShowIndex}) => {
//   console.log("one : ", props);

  // const [showItems, setShowItems] = useState(false);
  const handleHide = () => {

    setShowIndex();

    // if(showItems == true){
    //   setShowItems(false);
    // }
    // else{
    //   setShowItems(true);
    // }
    // console.log(showItems)
  }

  // const category = props.category;


  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      {/* accordion header */}
      <div className=" flex justify-between cursor-pointer" onClick={handleHide}>
        <span className="font-bold text-lg">
          {category.title} ({category.itemCards.length}){" "}
        </span>
        {showItems ? <span>⬆️</span> : <span>⬇️</span>}
      </div>

      {/* accordion body */}

        {/* {showItems ? 
        <Itemlist itemCards={category.itemCards} /> : 
        <div onClick={handleHide}>Show Items</div>
        } */}

        {
          showItems &&  <Itemlist itemCards={category.itemCards} />
        }


    </div>
  );
};

export default ResCategory;

