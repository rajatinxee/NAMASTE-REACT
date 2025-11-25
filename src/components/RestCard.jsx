const RestCard = ({ resname, cuisines, rating, deliveryTime, area, image }) => {
  return (
    <div data-testid="resCard" className="res-card m-4 w-[200px] h-[400px] bg-gray-100 hover:bg-gray-300 transition-all duration-300 border border-solid border-black rounded-md ">
      {/* <img className='res-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg'/> */}
      <img
        className="res-logo w-[200px] h-[200px] p-1"
        src={image}
        alt={resname}
      />
      <div className="p-3 ">
        <h2 className="font-bold">{resname}</h2>
        {/* <h3>{cuisines.join(', ')}</h3> */}
        <h3>{area}</h3>
        <h4>{rating} Stars</h4>
        <h5>{deliveryTime} minutes</h5>
      </div>
    </div>
  );
};

export const withLabel = (RestCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute font-bold m-4 p-4 bg-pink-600 max-w-52">
          {props.label?.header + " " + props.label?.subHeader }
          {/* label */}
        </label>
        <RestCard {...props} />
      </div>
    );
  };
};

export default RestCard;
