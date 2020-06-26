import React, { Component } from 'react'

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        };
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }

    onSubmit(event) {
        event.preventDefault();
        event.stopPropagation();

        const post = {
            title: this.state.title,
            body: this.state.body,
        }

        fetch('http://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/jsom'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

    render() {
        return (
            <div>
                <h1>Add Posts</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label>
                        <input name="title" type="text" onChange={this.onChange} value={this.state.title}/>
                    </div>
                    <div>
                        <label>Body: </label>
                        <textarea name="body" onChange={this.onChange} value={this.state.body}/>
                    </div>
                    <button type="submit">
                        Submit
                    </button>


                </form>
            </div>
        )
    }
}



export default PostForm;
