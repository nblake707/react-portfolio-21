import React from 'react';
import './style.css';

const NavigationButton = ({ ButtonName }) => {
    return (
        <button className='navigation-button'>
          {ButtonName}
        </button>
    )
}

export default NavigationButton;