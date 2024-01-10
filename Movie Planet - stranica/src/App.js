import './style.css';
import Nav from './components/Nav';
import Main from './components/Main';
import { navData } from "./Data/navData"
import { mainData } from './Data/mainData';
import {useState} from "react"

export default function App() {

  const [selectedMovieType, setSelectedMovieType] = useState(navData[0].name)

  const [selectedMovie, setSelectedMovie] = useState("")

  const [numberOfMovieCards, setNumberOfMovieCards] = useState(8)

  const [selectedNavIcon, setSelectedNavIcon] = useState(false)

  const [searchBarValue, setSearchBarValue] = useState("")

  // This function handles which link in navbar is selected.
  function handleSelectedLink(selectedLink) {
    setSelectedMovieType(selectedLink)
    setSelectedMovie("")
    setNumberOfMovieCards(8)
    setSearchBarValue("")
  }

  // This function handles which movie card is selected.
  function handleSelectedCard(selectedMovieCard) {
    setSelectedMovie(selectedMovieCard)
  }

  // This function handles the closing icon on a selected movie card window.
  function handleCloseIcon () {
    setSelectedMovie("")
  }

  // This function handles the amount of movie cards shown when we click a button show more/less.
  function handleShowCards() {
    setNumberOfMovieCards(prevState => prevState === 8? rightContent.length: 8)
  }

  // This is a function that handles the navbar in the mobile size when we click the icon nav-bars. 
  function handleNavBars() {
    setSelectedNavIcon(prevState => !prevState)
  }

  // This function handles the search bar display of movies
  function onSearchBarChange(event) {
    setSearchBarValue(prevState => event.target.value)
  }

  console.log(searchBarValue)

  let currentContent = []
  let rightContent;

  for (let i = 0; i < navData.length; i++) {
    if(selectedMovieType === navData[i].name){
      rightContent = navData[i].content
      for (let i = 0; i < numberOfMovieCards; i++){
        currentContent.push(rightContent[i])
      }
    }
  }

  const navElements = navData.map(item => {
    return (
      <Nav x
        className="activeLink" 
        onSelect={() => handleSelectedLink(item.name)} 
        isSelected={selectedMovieType === item.name}>

          {item.name}

      </Nav>
    )
  })

  // This is for the searchbar movie display
  const searchBarElements = mainData.map(item => {
    if(searchBarValue){
      let lowerCaseMovieName = item.movieName.toLowerCase()
      let lowerCaseSearchBarValue = searchBarValue.toLowerCase()
      for(let i = 0; i < searchBarValue.length; i++){
          if(lowerCaseMovieName[i] !== lowerCaseSearchBarValue[i]){
            return
          }
      }
      return (
        <Main 
          image={item.image} 
          movieName={item.movieName} 
          releaseYear={item.releaseYear} 
          onSelect={() => handleSelectedCard(item.movieName)}
          isSelected={selectedMovie === item.movieName}
          onCloseIconSelect={() => handleCloseIcon()}
          rating={item.rating}
          runTime={item.runTime}
          genre={item.genre}
          director={item.director}
          writer={item.writer}
          stars={item.stars}
          storyline={item.storyline}
          video={item.video}
        />
      )
    }
  })

  const mainElements = currentContent.map(item => {
    return (
      <Main 
        image={item.image} 
        movieName={item.movieName} 
        releaseYear={item.releaseYear} 
        onSelect={() => handleSelectedCard(item.movieName)}
        isSelected={selectedMovie === item.movieName}
        onCloseIconSelect={() => handleCloseIcon()}
        rating={item.rating}
        runTime={item.runTime}
        genre={item.genre}
        director={item.director}
        writer={item.writer}
        stars={item.stars}
        storyline={item.storyline}
        video={item.video}
      />
    )
  })

  return (
    <div>

      <menu className="menu">

        <h2>Movie<span>Planet</span></h2>

        <div className='search-bar-div'>
          <input type='text' name='search-bar' id='search-bar' onChange={onSearchBarChange} value={searchBarValue} />
          <i className="fa-solid fa-magnifying-glass search-icon"></i>
        </div>

        <ul className={!selectedNavIcon ? "list-invisible": "list-visible"}>

          {navElements}

        </ul>

        <i className={!selectedNavIcon ? "fa-solid fa-bars list-icon": "fa-solid fa-x list-icon"} onClick={handleNavBars}></i>

      </menu>

      <main>

        <h1>{searchBarValue ? "Searched": selectedMovieType} movies</h1>

        <div className='container'>

          {searchBarValue ? searchBarElements: mainElements}

        </div>

        <div className="show-cards-button">
          {!searchBarValue && <button onClick={handleShowCards}>{numberOfMovieCards === 8 ? "Show More": "Show Less"}</button>}
        </div>
      </main>

    </div>
  );
}

