import React from 'react'
import classes from './Button.module.css';

const Button = props => {
    let style = [classes.Button];
    if (props.btnType === 'Success') style.push(classes.Success)
    if (props.btnType === 'Danger') style.push(classes.Danger)
    return (
        <button className={style.join(" ")}>{props.children}</button>
    )
}

export default Button;