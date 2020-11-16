import React, { Component } from "react";


export default class GoogleMap extends Component 
{
    render() {
        return (
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d785.8668868954186!2d-57.532918270793566!3d-38.01287824211283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584dc3847559ec9%3A0xe894f3d8fd7d511f!2sBv.%20Maritimo%20Patricio%20Peralta%20Ramos%203532%2C%20B7600JVW%20Mar%20del%20Plata%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1605488132461!5m2!1ses!2sar" 
                width={1024} 
                height={500} 
                frameBorder={0} 
                style={{border: 0}} 
                allowFullScreen 
                aria-hidden="false" 
                tabIndex={0}
                title="Google maps"
            />
        )
    }
}