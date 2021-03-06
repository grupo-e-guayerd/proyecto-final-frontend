import React, { Component } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";

export default class SideBar extends Component
{
    clickHandler = (event)=>{ this.props.searchHandler("jobs/", event.target.name) }

    componentDidMount() {
        Aos.init({duration: 2000});
    }

    render() {
        let { categoryArray, arrayWorkers } = this.props;
        let auxArrayWorkers = []; /* In each iteration, only the workers of the category in question will be saved. */
        let category = "";
        categoryArray = categoryArray.sort((cat1, cat2)=>{
            if(cat1.category > cat2.category) { return 1 }
            if(cat1.category < cat2.category) { return -1 }
            return 0;
        });

        return (
            <aside className="sidebar">
                <div className="sidebar-title-container">
                    <h3 className="sidebar-title">Categorías</h3>
                </div>

                <div className="sidebar-options">
                {
                    categoryArray.map( arrayObject => {
                        category = arrayObject.category

                        auxArrayWorkers = arrayWorkers.filter( worker => { return worker.job === category} );
                        return (
                            <button 
                                data-aos="fade-up"
                                key={arrayObject._id} 
                                name={category}
                                className="sidebar-button"
                                onClick={this.clickHandler}
                            >
                                {category[0].toUpperCase()+category.slice(1)}
                                <span className="sidebar-availables"> ({auxArrayWorkers.length})</span>
                            </button>
                        )
                    })
                }
                </div>
            </aside>
        );
    }
}
