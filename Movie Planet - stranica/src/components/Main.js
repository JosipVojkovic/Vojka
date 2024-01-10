export default function Main(props) {
    return (

        <>
            <div className="movie-card" onClick={props.onSelect}>

                <img src={props.image} alt='batman movie' />
                <h3>{props.movieName} ({props.releaseYear})</h3>

            </div>

            {props.isSelected && 
                <div className="selected-movie">
                    <div className="selected-movie-content">
                        <div className="header-div">
                            <h2>{props.movieName} ({props.releaseYear})</h2>
                            <img src={props.rating} />
                        </div>
                        <p><span>Runtime:</span> {props.runTime}</p>
                        <p><span>Genre:</span> {props.genre}</p>
                        <p><span>Director:</span> {props.director}</p>
                        <p><span>Writer:</span> {props.writer}</p>
                        <p><span>Stars:</span> {props.stars}</p>
                        <p className="span"><span>Storyline:</span> {props.storyline}</p>

                    </div>

                    <div className="selected-movie-video">

                        <iframe width="100%" height="100%" src={props.video} allowFullScreen></iframe>

                    </div>

                    <img 
                        className="close-img"
                        src="https://cdn.pixabay.com/photo/2016/10/10/01/49/x-1727490_960_720.png" 
                        alt="close icon" 
                        onClick={props.onCloseIconSelect} 
                    />

                </div>
            }
        </>
        
    )
}