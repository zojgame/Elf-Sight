import { useEffect, useState } from "react"
import { getCharactersByPage } from "../../api"
import { PaginationComponent, CardBoardComponent } from "../../component"
import { useParams } from 'react-router-dom'
import { useStore } from "../../store"

const MainPage = () => {
    const { page } = useParams()

    const [pageCount, setPageCount] = useState(0)
    
    const {characters, setCharacters, currentPage, setCurrentPage} = useStore()

    useEffect(() => {
        setCurrentPage(page ?? '0')
        getCharactersByPage(currentPage).then(data => {
        setPageCount(data.data.info.pages)
        setCharacters(data.data.results)
    })
  }, [currentPage, page, setCharacters, setCurrentPage]);

   return (
    <>
    {characters.length > 0 && 
      <div className="main-page">
        <div className="card-board">
            <CardBoardComponent characters={characters} />
        </div>
        <PaginationComponent pageCount={pageCount} />
      </div>
    }
  </>
   );
};
export {MainPage} ;

