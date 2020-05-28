import React, { Component } from 'react'
import classes from './BuildApp.module.css'

import Navigation from '../../components/UI/Navigation/Navigation';
import ShowListDiv from '../../components/UI/ShowListDiv/ShowListDiv';

class BuildApp extends Component {
    state = {
        todoLists: [
            { task: "Not Playing Game", done: false, dropBox: false },
            { task: "Use Social Media only 1.5hrs", done: false, dropBox: false },
            { task: "Reading", done: false, dropBox: false }
        ]
    }

    onClickHandler = () => {
        if (this.refs.myTask.value !== "") {
            const updateToDoLists = [...this.state.todoLists];
            const updateValue = this.refs.myTask.value;
            updateToDoLists.push({ task: updateValue, done: false });
            this.refs.myTask.value = "";
            this.setState({ todoLists: updateToDoLists })
        }
    }

    editHandler = (index) => {
        const updateToDoLists = [...this.state.todoLists];
        updateToDoLists[index].dropBox = !updateToDoLists[index].dropBox;
        this.setState({ todoLists: updateToDoLists })
    }

    doneHandler = (index) => {
        const updateToDoLists = [...this.state.todoLists];
        updateToDoLists[index].done = !updateToDoLists[index].done;
        this.setState({ todoLists: updateToDoLists })
    }

    deleteHandler = (index) => {
        const updateToDoLists = [...this.state.todoLists];
        updateToDoLists.splice(index, 1);
        console.log(updateToDoLists);
        this.setState({ todoLists: updateToDoLists })
    }

    render() {
        const Input = (
            <div className={classes.Input}>
                <input type="text" placeholder="Show your talent" ref="myTask" />
                <button disabled={false} onClick={this.onClickHandler}>Add</button>
            </div>
        )
        const showList = (
            <div className={classes.ShowList}>
                <h2>My Tasks</h2>
                {this.state.todoLists.map((list, index) => {
                    return <ShowListDiv key={index}
                        task={list.task}
                        isDone={list.done}
                        edit={() => this.editHandler(index)}
                        done={() => this.doneHandler(index)}
                        delete={() => this.deleteHandler(index)} />
                })}
            </div >
        )
        return (
            <div className={classes.Body}>
                <Navigation />
                {Input}
                {this.state.todoLists.length ? showList : null}
            </div>
        )
    }
}

export default BuildApp;