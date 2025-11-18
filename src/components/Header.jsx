import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/Hooks/useOnlineStatus";
import UserContext from "../Context/UserContext";
import { useSelector } from "react-redux";
// import appStore from "../Redux/appStore";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const loginToggle = () => {
    // if(btnName === "Login"){
    //     setBtnName("Logout");
    // }
    // else{
    //     setBtnName("Login");
    // }

    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  // const store = appStore

  const cartItems = useSelector((store) => store.cart.items);
  console.log("cart Item", cartItems);

  const online = useOnlineStatus();

  return (
    <div className="headerb flex justify-between items-center bg-gray-100 shadow-md">
      <div className="logo-container">
        <img
          className="logo w-32"
          src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"
        />
      </div>

      <div className="nav-items flex ml-4">
        <ul className="flex gap-10 font-semibold">
          <li>{online ? "✅" : "⛔"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart = {cartItems.length}</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <div className="font-bold"> {loggedInUser} </div>
        </ul>
      </div>
      <button
        className="login-btn bg-blue-200 py-4 px-5 hover:bg-blue-400 transition-all duration-500 mr-8 rounded-md"
        onClick={loginToggle}
      >
        {btnName}
      </button>
    </div>
  );
};

export default Header;
