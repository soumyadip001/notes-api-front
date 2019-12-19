import React, { Component } from "react"
import Axios from "axios"
import {Link} from "react-router-dom"

class EditPost extends Component {
    state = {
        postId: "",
        title: "",
        description: "",
        cover: ""
    }

    componentDidMount() {
        const userToken = localStorage.getItem("user_token")
        const postId = this.props.match.params.id
        if (userToken) {
            // add token to header
            const config = {
                headers: { 'Authorization': "Bearer " + userToken }
            }

            Axios.get('http://127.0.0.1:3001/posts/'+ postId, config)
                .then((response) => {
                    this.setState({ 
                        postId: postId,
                        title: response.data.title,
                        description: response.data.description
                    })
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            this.props.history.push('/login')
        }
    }

    handleUserInput(e) {
        const name = e.target.name
        const value = e.target.value
        this.setState({ [name]: value })
    }

    submitForm(e) {

        e.preventDefault()
        const userToken = localStorage.getItem("user_token")

        if (userToken) {

            const config = {
                headers: { 'Authorization': "Bearer " + userToken }
            }

            const postData = {
                title: this.state.title,
                cover: this.state.cover,
                description: this.state.description
            }
    
            Axios.patch('http://127.0.0.1:3001/posts/'+this.state.postId, postData, config)
                .then((response) => {
                    this.props.history.push('/')
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
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-md-3">
                        <form style={{marginTop: "20px", padding: "10px"}}>
                            <div className="display-4 text-uppercase text-center mb-4">Create Post</div>

                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input className="form-control form-control-lg" 
                                        type="text" id="title" 
                                        name="title"
                                        placeholder="Enter Title"
                                        onChange={(event) => this.handleUserInput(event)}
                                        value={this.state.title} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea className="form-control"
                                        name="description" id="description"
                                        rows="10" cols="20"
                                        onChange={(event) => this.handleUserInput(event)}
                                        value={this.state.description}></textarea>
                            </div>

                            <button className="btn btn-success btn-block" 
                                    type="submit"
                                    onClick={(event) => this.submitForm(event)}>Save Post</button>
                            
                            <Link className="btn btn-primary btn-block" to="/">Go Back</Link>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default EditPost