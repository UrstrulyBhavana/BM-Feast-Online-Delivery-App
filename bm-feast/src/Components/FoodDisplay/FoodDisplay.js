// import React, { useContext } from 'react'
// import './FoodDisplay.css'
// import { StoreContext } from '../../context/StoreContext'
// import FoodItem from '../FoodItem/FoodItem'

// const FoodDisplay = ({category}) => {
      
//      const {food_list} = useContext(StoreContext)

//   return (
//     <div className='food-display' id='food-display'>
//         <h2>Top Picks in Your Vicinity</h2>
//         <div className="food-display-list">
//             {food_list.map((item,index)=>{
              
//               if (category==="All" || category===item.category) {
//                 return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
//               }
//             })}
//         </div>
//     </div>
//   )
// }

// export default FoodDisplay



import React, { useContext } from 'react';
import './FoodDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {
    const { food_list, searchTerm } = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Picks in Your Vicinity</h2>
            <div className="food-display-list">
                {food_list
                    .filter(item => category === "All" || category === item.category)
                    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
                    .map((item, index) => (
                        <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    ))}
            </div>
        </div>
    );
};

export default FoodDisplay;
