import React, {Component} from "react"
import Axios from "axios"

import Image from "../../UI/Img/Img"

class Logout extends Component {

    logout = () => {
        const userToken = localStorage.getItem("user_token")
        if (userToken) {
            // add token to header
            const config = {
                headers: { 'Authorization': "Bearer " + userToken }
            }

            Axios.post('http://127.0.0.1:3001/users/logout', null, config)
                .then((response) => {
                    localStorage.removeItem('user_token')
                    localStorage.removeItem('user_name')
                    localStorage.removeItem('user_email')
                    this.props.history.push('/login')
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <a className="nav-link" onClick={this.logout}>
                <Image src="/open-iconic/svg/power-standby.svg" height="15" alt="logout" />
            </a>
        )
    }
}

export default Logout