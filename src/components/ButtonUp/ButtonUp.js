import React, { Component } from 'react';
import ScrollToTop from "react-scroll-up";

class ButtonUp extends Component {
    render() {
        return (
            <ScrollToTop showUnder={160}>
                <i class="fas fa-arrow-circle-up"></i>
            </ScrollToTop>
        );
    }
}

export default ButtonUp;