import React from 'react'
import {isEmpty} from 'underscore'
import './App.css'
import Tilt from 'react-tilt'
function ResultList(props) {
    return (
        <div>
        {
            Object.keys(props.artist).length != 0 && (
            <div>
            {/* <img className="artistImage" src={props.artist.images[0].url}></img> */}
            <div className="album-grid">
                {
                    props.albums.items.map(album => {
                        return(
                            <Tilt className="grid-img" options={{ max : 10 ,  perspective: 800}} style={{ height: album.images[1].height, width: album.images[1].width}}>
                                <img src={album.images[1].url}></img>
                            </Tilt>
                        )
                    })

                }
            </div>
            </div>
            )
        }
        </div>
    )
}

export default ResultList
