import React from 'react';
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { bindActionCreators } from 'redux';
import * as movieAction from '../../actions/MovieAction'

class AddMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null
        }
    }

    onChangeField(e) {
        const { name, value } = e.target;
        if (this.state.movie == null) {
            let movie = new Object();
            movie[name] = value;

            this.setState({
                movie: Object.assign({}, movie)
            })
        } else {
            let movie = this.state.movie;
            movie[name] = value;
            this.setState({
                movie: Object.assign({}, movie)
            })
        }
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Field>
                        <label>Title</label>
                        <input placeholder='title' name="title" onChange={this.onChangeField.bind(this)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Genre</label>
                        <input placeholder='genre' name="genre" onChange={this.onChangeField.bind(this)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Year</label>
                        <input placeholder='year' name="year" onChange={this.onChangeField.bind(this)} />
                    </Form.Field>
                    <Form.Field>
                        <label>Author</label>
                        <input placeholder='author' name="author" onChange={this.onChangeField.bind(this)} />
                    </Form.Field>

                    <Button type='submit' onClick={() => {
                        console.log(this.state.movie)
                        this.props.action.add_movie(this.state.movie)
                        this.props.redirect()
                    }}>Submit</Button>
                </Form>
            </div>
        )
    }

}

function mapDispacth(dispatch) {
    return {
        action: bindActionCreators(movieAction, dispatch)
    }
}
export default connect(null, mapDispacth)(AddMovie)