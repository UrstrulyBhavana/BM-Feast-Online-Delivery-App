import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {

    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Feast Your Eyes on Our Menu</h1>
            <p className='explore-menu-text'>Dive into a culinary adventure with our diverse menu, offering an exquisite selection of dishes meticulously prepared using premium ingredients and culinary mastery. Our goal is to tantalize your taste buds and enhance your dining journey, ensuring each bite is a delightful experience crafted just for you.</p>
            <div className='explore-menu-list'>
                {menu_list.map((item,index) => {
                    return (
                        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                            <p>{item.menu_name}</p>
                        </div>
                     )
                })}
            </div>
            <hr/>
        </div>
    )
}

export default ExploreMenu

