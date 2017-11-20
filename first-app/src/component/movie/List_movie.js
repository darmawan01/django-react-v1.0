import React from 'react';
import { connect } from 'react-redux'
import { Icon, Label, Menu, Table, Button } from 'semantic-ui-react'
import DetailMovie from './Detail_movie'
import { bindActionCreators } from 'redux';
import * as movieAction from '../../actions/MovieAction'
import { history } from '../../history'

class ListMovie extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            modalOpen: false,
            selectedMovie: null
        }
    }

    handleOpen(event, e) {
        const movie_id = e.movie_id;
        this.setState({
            modalOpen: true,
            selectedMovie: this.props.movies.find(data => data.id === movie_id)
        })
    }

    handleClose() { this.setState({ modalOpen: false, selectedMovie: null }) }

    componentWillMount() {
        this.props.action.all_movie();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.movies.lenght > 0) {
            this.setState({
                movies: nextProps.movies
            })
        }
    }

    onEdit(data) {
        console.log(data)
        this.props.action.update_movie(this.state.selectedMovie.id, data).then(() => {

            this.setState({
                modalOpen: false,
                selectedMovie: null
            })
        })
        setTimeout(() => {
            history.push("/movie/list");
        }, 100);
    }

    onDelete(event,{movie_id}){
        this.props.action.delete_movie(movie_id).then(() => {
            this.setState({
                selectedMovie:null
            })
        })
    }

    render() {
        const tableData = []

        this.props.movies.map(data => {
            tableData.push({
                id: data.id,
                title: data.title,
                genre: data.genre,
                year: data.year,
                author: data.author,
            })
        })

        const headerRow = [
            'Title',
            'Genre',
            'Year',
            'Author',
            'Actio',
        ]
        const renderBodyRow = ({ id, title, genre, year, author }, i) => ({
            key: id || `row-${i}`,
            cells: [

                title || 'No name specified',
                genre || 'No name specified',
                year || 'No name specified',
                author || 'No name specified',
                (
                    <Button movie_id={id} onClick={this.handleOpen.bind(this)}>
                        Detail
                    </Button>
                ),
                (
                    <Button movie_id={id} onClick={this.onDelete.bind(this)}>
                        Delete
                    </Button>
                )

            ],
        })
        return (
            <div>
                <Table
                    celled
                    headerRow={headerRow}
                    renderBodyRow={renderBodyRow}
                    tableData={tableData}
                >
                </Table>
                {this.state.selectedMovie && <DetailMovie onSave={this.onEdit.bind(this)} data={this.state.selectedMovie} modalOpen={this.state.modalOpen} handleClose={this.handleClose.bind(this)} />}

            </div >
        )
    }

}

function mapState(state) {
    return {
        movies: state.movies
    }
}

// action
function mapDispatch(dispatch) {
    return {
        action: bindActionCreators(movieAction, dispatch)
    }
}

export default connect(mapState, mapDispatch)(ListMovie)