import React from 'react';
import classes from './ShowListDiv.module.css';


const ShowListDiv = props => {
    let style = [classes.Task];
    if (props.isDone) {
        style.push(classes.Done)
    }
    return (

        <div className={classes.ShowListDiv}>
            <div className={style.join(" ")}>{props.task}</div>
            <div className={classes.Options}>
                {/* <i className="far fa-edit" onClick={props.edit}></i> */}
                <i className="fas fa-check" onClick={props.done}></i>
                <i className="far fa-trash-alt" onClick={props.delete}></i>
            </div>
        </div>
    )
}

export default ShowListDiv;