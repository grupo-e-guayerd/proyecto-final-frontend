import React, { Component } from 'react';
import Testimonial from "../Testimonial/Testimonial";

class TestimonialList extends Component {
    render() {
        return (
            <div className="testimonial-container">
                <h2 className="testimonial-title-main">TESTIMONIOS</h2>
                <h3 className="testimonial-subtitle-main">Ver que opina la gente de nosotros</h3>
                <div className="testimonial-list">
                    <Testimonial />
                    <Testimonial />
                    <Testimonial />
                    <Testimonial />
                    <Testimonial />
                    <Testimonial />
                </div>
            </div>
        );
    }
}

export default TestimonialList;