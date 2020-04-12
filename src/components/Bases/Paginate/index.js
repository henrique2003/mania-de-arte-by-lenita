import React from 'react'
import PaginateItem from './PaginateItem'
import './style.scss'

const Paginate = ({ paginate }) => {
    const { pages, path } = paginate

    function validPaginate(pages) {
        if (pages <= 3) {
            if (pages === 1) return false
            return (
                <>
                    <PaginateItem 
                        classContent={pages - 2 <= 0 ? "d-none" : ""}
                        path={`${path}?page=${pages - 2}`}
                        text={pages - 2}
                    />
                    <PaginateItem
                        path={`${path}?page=${pages - 1}`}
                        text={pages - 1}
                    />
                    <PaginateItem 
                        path={`${path}?page=${pages}`}
                        text={pages}
                    />
                    <PaginateItem 
                        classContent={pages + 1 > pages ? "d-none" : ""}
                        path={`${path}?page=${pages + 1}`}
                        text={pages + 1}
                    />
                </>
            )
        }
        return (
            <>
                <PaginateItem 
                        classContent={pages - 1 <= 0 ? "d-none" : ""}
                        path={`${path}?page=${pages - 1}`}
                        text={<i className='fas fa-chevron-left'></i>}
                />
                <PaginateItem 
                        classContent={pages + 2 > pages ? "d-block" : "d-none"}
                        path={`${path}?page=${pages - 2}`}
                        text={pages - 2}
                />
                <PaginateItem 
                        classContent={pages - 2 <= 0 ? "d-none" : ""}
                        path={`${path}?page=${pages - 1}`}
                        text={pages - 1}
                />
                <PaginateItem
                        path={`${path}?page=${pages}`}
                        text={pages}
                />
                <PaginateItem 
                        classContent={pages + 1 > pages ? "d-none" : ""}
                        path={`${path}?page=${pages + 1}`}
                        text={pages + 1}
                />
                <PaginateItem 
                        classContent={pages - 2 <= 0 ? "d-block" : "d-none"}
                        path={`${path}?page=${pages + 2}`}
                        text={pages + 2}
                />
                <PaginateItem 
                        classContent={pages + 1 > pages ? "d-none" : ""}
                        path={`${path}?page=${pages + 1}`}
                        text={<i className="fas fa-chevron-right"></i>}
                />
            </>
        )
    }

    return (
        <div className="wrapper_paginate">
            <ul>
                {validPaginate(pages)}
            </ul>
        </div>
    )
}

export default Paginate