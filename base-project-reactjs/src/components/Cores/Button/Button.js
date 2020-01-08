import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { content, handleClick, className } = this.props;
        return (
            <button 
                className={className} 
                onClick={handleClick}> 
                {content}
            </button>
        );
    }
}

export default Button;