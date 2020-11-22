import React, { Component } from 'react';

export default class SideBar extends Component {
    render() {
        const { categoryArray } = this.props;
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
