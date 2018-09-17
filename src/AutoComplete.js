import React, { Component } from 'react'
import data from './users'

export class AutoComplete extends Component {

    constructor() {
        super();
        this.state = { data: [] }
    }

    onChangeHandler = (val) => {
        console.log('hi there',data);
        //display data that starts with val or contains val
        const res = this.selectData(val);
        console.log('res',res);
    }

    selectData = (v) => {
        //console.log(users);
        // const fil = users.filter(u => u.name.startsWith(v))
        // console.log(fil);
        // return fil.map(u => u.name)
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
