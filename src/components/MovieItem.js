import React from 'react';

export default class MovieItem extends React.Component {
// раньше state был в констукторе с super, но после рефакторинга ушел
    state = {
        willWatch: false
    }

    toggleWillWatch =() => {
        const {item, removeMovieFromToWatch, addMovieToWatch} = this.props;
        if (this.state.willWatch) {
            removeMovieFromToWatch(item.id)
        } else {
            addMovieToWatch(item)
        }
        this.setState({willWatch: !this.state.willWatch})
}


    render() {
        const {item, addMovieToWatch, removeMovieById, removeMovieFromToWatch} = this.props;
        const classNameBtn = `btn ${this.state.willWatch === true ? "btn-success" : "btn-secondary"} `;
        return (
            <div className="card">
                <img
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
                    item.poster_path}`}
                    alt=""
                />
                <div className="card-body">
                    <h6 className="card-title">{item.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating: {item.vote_average}</p>
                        <button type="button" className={classNameBtn} onClick={() => {
                            this.toggleWillWatch()
                        }}>
                            Will Watch
                        </button>
                        <button className="btn btn-secondary" type="submit" onClick={() => {
                            removeMovieById(item.id)
                        }}>Delete
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

