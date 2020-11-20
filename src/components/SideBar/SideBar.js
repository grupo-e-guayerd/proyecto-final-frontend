import React, { Component } from 'react';

export default class SideBar extends Component {
    render() {
        return (
            <aside className="sidebar">
                <div className="sidebar-title-container">
                    <h3 className="sidebar-title">Categorias</h3>
                </div>

                <div className="sidebar-options">
                    <button className="sidebar-button">
                        Carpintería
                        <span className="sidebar-availables"> (150)</span>
                    </button>
                    <button className="sidebar-button">
                        Electricidad
                        <span className="sidebar-availables"> (150)</span>
                    </button>
                    <button className="sidebar-button">
                        Herrería
                        <span className="sidebar-availables"> (150)</span>
                    </button>
                    <button className="sidebar-button">
                        Plomería
                        <span className="sidebar-availables"> (150)</span>
                    </button>
                    <button className="sidebar-button">
                        Jardinería
                        <span className="sidebar-availables"> (150)</span>
                    </button>
                    <button className="sidebar-button">
                        Mecánica
                        <span className="sidebar-availables"> (150)</span>
                    </button>
                    
                </div>
            </aside>
        );
    }
}
