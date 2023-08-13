import { IPaginationProps } from "./types";
import { useStore } from "../../store";
import { useNavigate } from "react-router-dom";

const PaginationComponent = ({
    pageCount
} : IPaginationProps) => {
    const {currentPage, setCurrentPage} = useStore()
    const page = Number.isNaN(Number(currentPage)) ? 0 : Number(currentPage)
    const pages = findPages(pageCount, page)
    const navigate = useNavigate()

    const handleOnChangePage = (page: string) => {
        setCurrentPage(page)
        navigate(`/${page}`)
    }

    const handleChangeToPrevPage = () => {
        const prevPage = `${Number(currentPage) - 1}`
        setCurrentPage(prevPage)
        navigate(`/${prevPage}`)
    }

    const handleChangeToNextPage = () => {
        const nextPage = `${Number(currentPage) + 1}`
        setCurrentPage(nextPage)
        navigate(`/${nextPage}`)
    }


    return (
        <div className="pagination">
            {currentPage !== '1' ? <a onClick={handleChangeToPrevPage} className='page'>«</a> : <></>}

            {pages.map((page) => {
                const pageClass = currentPage === page ? 'active-page' : '';
                return <a onClick={() => handleOnChangePage(page)} className={`${pageClass} page`} key={page}>{page}</a>
            })}

            {currentPage !== `${pageCount}` ? <a className='page' onClick={handleChangeToNextPage}>»</a> : <></>}
            
        </div>
   );
};

const findPages = (pageCount: number, currentPage: number) : string[] => {
    const prevPage = currentPage - 1 > 1 ? currentPage - 1 : 1
    const nextPage = currentPage + 1 < pageCount ? currentPage + 1 : pageCount
    const uniqValues = [...new Set([1, prevPage, currentPage, nextPage, pageCount])]
        .map((page) => String(page))

    return uniqValues
}

export {PaginationComponent}