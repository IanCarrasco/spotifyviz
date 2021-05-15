import './App.css';
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import SearchBar from './SearchBar'

function App() {
  let redirect_uri = encodeURI("http://localhost:3000")

  let location = useLocation()

  const [accessToken, setAccessToken] = useState("")


  var myUrl = new URL(window.location.href.replace("/#","?"));
  var param_value = myUrl.searchParams.get("access_token");

  if (accessToken === ""){
    setAccessToken(param_value)
  }
  return (
    <div className="App">
      <h1 className="hero-text">Discography</h1>
      {param_value ? (
        <>
        <h3 className="hero-subtext">Type in an artist or band below.</h3>
        <SearchBar accessToken={accessToken} />
        </>
      ) : 
      <Link to={{ pathname: `https://accounts.spotify.com/en/authorize?response_type=token&redirect_uri=${redirect_uri}&client_id=8ababa3ef6374d7fbd7d8b08ace25c3a&state=o0sks`}} target="_blank"><button className="login-button">SIGN IN WITH SPOTIFY</button></Link>

      }
    </div>  
  );
}

export default App;
