import React, { Component } from 'react'
import users from './data.json'

export class AutoComplete extends Component {

    constructor() {
        super();
        this.state = { data: [] }
    }

    onChangeHandler = (val) => {
        console.log('hi there');
        //display data that starts with val or contains val
        selectData();
    }

    selectData = (v) => {
        const fil = users.filter(u => u.name.startsWith(v))
    }

    render() {
        // debugger
        const { users } = this.props;
        console.log(users);

        return (
            <div>
                <div>
                    <input type='text' onChange={(e) => this.onChangeHandler(e.target.value)}></input>
                </div>
                <ul>
                    {this.state.data.map((u) => {
                        return <li>{u.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}
