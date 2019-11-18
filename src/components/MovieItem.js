import React from 'react';

export default class MovieItem extends React.Component{
    constructor() {
        super();
        this.state = {
            willWatch: false
        }
    }

    render() {
        const {item, addMovieToWatch, removeMovieById} = this.props;
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
                        <button type="button" className="btn btn-secondary" onClick={() => {
                            addMovieToWatch(item)
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

