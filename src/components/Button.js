import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ['btn--primary', 'btn--outline'];

const SIZE = ['btn--medium', 'btn--large'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZE[0];

    return (
        <Link to="/signup" className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type="{type}">
                {children}      {/* whatever we put here gets rendered */}
            </button>
        </Link>
    )
};
