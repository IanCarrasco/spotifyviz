import './App.css';
import {useState} from 'react'
import ResultList from './ResultList'

function SearchBar(props) {

  const [artistName, setArtistName] = useState("")
  let [artistObj, setArtistObj] = useState({})
  let [albums, setAlbums] = useState({})

  const fetchAlbums = (id) => {
    fetch(`https://api.spotify.com/v1/artists/${id}/albums?include_groups=album&market=US&limit=50`, {
        headers: {
            "Authorization": `Bearer ${props.accessToken}`,
            "Accept": "application/json", 
            "Content-Type": "application/json"}
    }).then(response => response.json()).then((data) => {setAlbums(data)})
  }

  const fetchArtist = () => {
    fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(artistName)}&type=artist&market=US`, {
        headers: {
            "Authorization": `Bearer ${props.accessToken}`,
            "Accept": "application/json", 
            "Content-Type": "application/json"}
    }).then(response => response.json()).then((data) => data.artists.items[0]).then((artist) => {fetchAlbums(artist.id); setArtistObj(artist)})
  }

  console.log(albums)
  console.log(artistObj)

  return (
    <>
    <div className="search-box">
        <input className="search-input" placeholder="Post Malone" value={artistName} onChange={(e) => setArtistName(e.target.value)}></input>
        <span className="search-submit" onClick={() => {fetchArtist()}}>➔</span>
    </div>
    {Object.keys(albums).length != 0 &&
    <ResultList artist={artistObj} albums={albums}></ResultList>}
    </>
  );
}

export default SearchBar;
