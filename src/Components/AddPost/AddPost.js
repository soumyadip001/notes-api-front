import React, {Component} from "react"
import axios from "axios"

class AddPost extends Component {

    state = {
        title: "",
        description: "",
        cover: ""
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
    
            axios.post('http://127.0.0.1:3001/posts', postData, config)
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

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 offset-md-3">
                        <form style={{marginTop: "20px"}, {padding: "10px"}}>
                            <div className="display-4 text-uppercase text-center mb-4">Create Post</div>

                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input className="form-control form-control-lg" 
                                        type="text" id="title" 
                                        name="title"
                                        placeholder="Enter Title"
                                        onChange={(event) => this.handleUserInput(event)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <textarea className="form-control"
                                        name="description" id="description"
                                        rows="10" cols="20"
                                        onChange={(event) => this.handleUserInput(event)}></textarea>
                            </div>

                            <button className="btn btn-primary btn-block" 
                                    type="submit"
                                    onClick={(event) => this.submitForm(event)}>Create Post</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPost