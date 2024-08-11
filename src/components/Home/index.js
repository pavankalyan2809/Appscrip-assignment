import { Component } from "react";
import { LuArrowBigDownDash, LuArrowBigUpDash  } from "react-icons/lu";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

import Header from '../Header'
import Footer from "../Footer"; 
import Products from '../Products'

import './index.css'


class Home extends Component{

    state = {
        filterToggle : false,
    }


    onCLickFilterToggle = () =>{
        this.setState(prevState => ({filterToggle : !prevState.filterToggle}))
    }

    render(){

        const {filterToggle} = this.state

        const isUpArrow = filterToggle ? 
        (<LuArrowBigUpDash className="arrow-icons" size={20}/>) : (<LuArrowBigDownDash className="arrow-icons" size={20} />)

        const isDisplayFilterItems = filterToggle ? "filter-items-main-container" : "not-display-filter-items-conntainer"
       
        const isShowFilterText = filterToggle ? 'HIDE FILTER' : 'SHOW FILTER' 
        
      

        return(
            <div className="home-main-container">
                <Header />
                <div className="home-container">
                    <div className='indicate-nav-container'>
                        <p className='indicate-home-item'>HOME</p>
                        <p className='indicate-shop-item'>SHOP</p>
                    </div>
                    <div className='home-heading-and-description'>
                        <h1 className='home-heading'>DISCOVER OUR PRODUCTS</h1>
                        <p className='home-description'>
                            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementun dolor.
                        </p>
                    </div>

                    <div className="small-device-filters-section-container">
                        <div className="filter-heading-container"  onClick={this.onCLickFilterToggle} >
                            <h1 className='filter-heading-button'>FILTER</h1>
                            {isUpArrow}
                        </div>
                        <div className='filter-select-container'>
                        <select className='filter-select'>
                            <option id="Recommended" className='filter-option'>RECOMMENDED</option>
                            <option id="NewestFirst" className='filter-option'>NEWEST FIRST</option>
                            <option id="Popular" className='filter-option'>POPULAR</option>
                            <option id="HighToLow" className='filter-option'>HIGH TO LOW</option>
                            <option id="LowToHigh" className='filter-option'>LOW TO HIGH</option>
                        </select>
                        </div>
                    </div>

                    <div className="large-device-filters-section-container">
                        <div className="filter-section-container">
                            <h1 className='filter-item-count'>3425 ITEMS</h1>
                            <div className="showFilter-heading-container">
                                {filterToggle ? (<MdChevronLeft className="arrow-icons" size={23} />) : (<MdChevronRight className="arrow-icons" size={23} />)}
                                <h1 className="showFilter-heading" onClick={this.onCLickFilterToggle}>{isShowFilterText}</h1>
                            </div>
                        </div>
                        <div className='filter-select-container'>
                        <select className='filter-select'>
                            <option id="Recommended" className='filter-option'>RECOMMENDED</option>
                            <option id="NewestFirst" className='filter-option'>NEWEST FIRST</option>
                            <option id="Popular" className='filter-option'>POPULAR</option>
                            <option id="HighToLow" className='filter-option'>HIGH TO LOW</option>
                            <option id="LowToHigh" className='filter-option'>LOW TO HIGH</option>
                        </select>
                        </div>
                    </div>
                    <div className="filter-and-product-section-container">
                        <div className={isDisplayFilterItems} >
                            <ul className="filter-items-container">
                                <li className='filter-item-checkbox'>
                                    <input type="checkbox" id="CheckBox" />
                                    <label className='filter-label' htmlFor='CheckBox'>CUSTOMIZBLE</label>
                                </li>
                                <li className='filter-item'>IDEAL FOR</li>
                                <li className='filter-item'>OCCASION</li>
                                <li className='filter-item'>WORK</li>
                                <li className='filter-item'>FABRIC</li>
                                <li className='filter-item'>SEGMENT</li>
                                <li className='filter-item'>SUITABLE FOR</li>
                                <li className='filter-item'>RAW MATERIALS</li>
                                <li className='filter-item'>PATTERN</li>
                            </ul>
                        </div>
                        <Products filterToggle={filterToggle}/>
                    </div>
                </div> 
                <Footer />   
            </div>
        )  
            
    }
} 

export default Home