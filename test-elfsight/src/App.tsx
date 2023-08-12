import { useEffect, useState } from "react"
import { getCharacters, Character } from "./api"
import { CardComponent } from "./component";

function App() {
  const [characters, setCharacters] = useState<Character[]>([])

  useEffect(() => {
    getCharacters().then(data => {
      
      setCharacters(data.data.results)
    })
  }, []);

  return (
    <>
      {characters.length > 0 && 
        <div className="main-page">
          <div className="card-board">
            <CardComponent character={characters[0]}/>
            <CardComponent character={characters[1]}/>
            <CardComponent character={characters[2]}/>
            <CardComponent character={characters[3]}/>
            <CardComponent character={characters[0]}/>
            <CardComponent character={characters[1]}/>
            <CardComponent character={characters[2]}/>
            <CardComponent character={characters[3]}/>
          </div>
          <div className="pagination">
            <a href="#">«</a>
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">6</a>
            <a href="#">»</a>
          </div>
        </div>
      }
    </>
  )
}

export default App
