import React, { Component } from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

export default class DetailMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    }
  }

  onChangeField(e) {
    const { name, value } = e.target;
    let movie = this.state.movie;
    movie[name] = value;
    this.setState({
      movie: Object.assign({}, movie)
    })

  }


  componentWillMount(){
    this.setState({
      movie: this.props.data
    })
  }
  render() {

    return (
      <Modal
        open={this.props.modalOpen}
        onClose={this.props.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content='Cookies policy' />
        <Modal.Content>
          <Form>
            <Form.Field>
              <h3>Title</h3>
              <input placeholder='title' name="title" onChange={this.onChangeField.bind(this)} value={this.state.movie && this.state.movie.title} />
            </Form.Field>
            <Form.Field>
              <h3>Genre</h3>
              <input placeholder='genre' name="genre" onChange={this.onChangeField.bind(this)} value={this.state.movie && this.state.movie.genre} />
            </Form.Field>
            <Form.Field>
              <h3>Year</h3>
              <input placeholder='year' name="year" onChange={this.onChangeField.bind(this)} value={this.state.movie && this.state.movie.year} />
            </Form.Field>
            <Form.Field>
              <h3>Author</h3>
              <input placeholder='author' name="author" onChange={this.onChangeField.bind(this)} value={this.state.movie && this.state.movie.author} />
            </Form.Field>
          </Form>

        </Modal.Content>
        <Modal.Actions>
          <Button type='submit' onClick={() => this.props.onSave(this.state.movie) }>Submit</Button>
        </Modal.Actions>
      </Modal>
    )
  }
}