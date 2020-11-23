import React, { Component } from 'react';

export default class SideBar extends Component {
    render() {
        let { categoryArray, arrayWorkers } = this.props;
        categoryArray = categoryArray.sort((cat1, cat2)=>{
            if(cat1.category > cat2.category) { return 1 }
            if(cat1.category < cat2.category) { return -1 }
            return 0;
        })
        return (
            <aside className="sidebar">
                <div className="sidebar-title-container">
                    <h3 className="sidebar-title">Categorias</h3>
                </div>

                <div className="sidebar-options">
                {
                    categoryArray.map( arrayObject => {
                        return (
                            <button key={arrayObject._id} className="sidebar-button">
                                {arrayObject.category[0].toUpperCase()+arrayObject.category.slice(1)}
                                <span className="sidebar-availables"> (n)</span>
                            </button>
                        )
                    })
                }
                </div>
            </aside>
        );
    }
}
