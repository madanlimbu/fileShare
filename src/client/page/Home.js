import React, {Component} from "react";
import LoginForm from "./LoginForm";


export default class Home extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <LoginForm/>
            </div>
        )
    }
}