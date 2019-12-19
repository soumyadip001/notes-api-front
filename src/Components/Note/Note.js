import React, { Component } from "react"

import SimpleCard from "../../Layout/Card/SimpleCard"
import Aux from "../../HOC/Wrapper"
import Axios from "axios"

class Note extends Component {
    state = {
        posts: []
    }

    componentDidMount () {
        const userToken = localStorage.getItem("user_token")
        if (userToken) {
            // add token to header
            const config = {
                headers: { 'Authorization': "Bearer " + userToken }
            }

            Axios.get('http://127.0.0.1:3001/posts', config)
                .then((response) => {
                    this.setState({ posts: response.data })
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            this.props.history.push('/login')
        }
    }

    removePost = function(postId) {
        const userToken = localStorage.getItem("user_token")
        if (userToken) {
            // add token to header
            const config = {
                headers: { 'Authorization': "Bearer " + userToken }
            }

            Axios.delete('http://127.0.0.1:3001/posts/'+postId, config)
                .then((response) => {
                    window.location.reload()
                })
                .catch((error) => {
                    console.log(error)
                });
        } else {
            this.props.history.push('/login')
        }
    }

    render() {

        const allNotes = this.state.posts.map(post => {
            return (
                <SimpleCard 
                    imgSource={post.cover} 
                    caption={post.title} 
                    title={post.title} 
                    content={post.description}
                    postId={post._id}
                    key={post._id}
                    bgColor="primary"
                    remove={() => this.removePost(post._id)} />
            )
        })

        return <Aux> { allNotes } </Aux>
    }
}

export default Note