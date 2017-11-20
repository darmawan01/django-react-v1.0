import React, { Component } from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import AddMovie from './movie/Add_movie'
import ListMovie from './movie/List_movie'

export default class SideMenu extends Component {
  state = { activeItem: 'List Movie' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  redirectSave(){
      this.setState({
        activeItem: 'List Movie'
      })
  }

  render() {
    const { activeItem } = this.state

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item name='List Movie' active={activeItem === 'List Movie'} onClick={this.handleItemClick} />
            <Menu.Item name='Add Movie' active={activeItem === 'Add Movie'} onClick={this.handleItemClick} />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            {activeItem === "List Movie" ?
              <ListMovie />: ""
            }
            {activeItem === "Add Movie" &&
              <AddMovie redirect={this.redirectSave.bind(this)} />
            }

          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
