import React from 'react'
import PaginateItem from './PaginateItem'
import './style.scss'

const Paginate = ({ paginate }) => {
    const { page, pages } = paginate

    function validPaginate(page, pages) {
        if (pages <= 3) {
            if (page === 1) return false
            return (
                <>
                    <PaginateItem 
                        classContent={page - 2 <= 0 ? "d-none" : ""}
                        path={`/admin/produtos?page=${page - 2}`}
                        text={page - 2}
                    />
                    <PaginateItem
                        path={`/admin/produtos?page=${page - 1}`}
                        text={page - 1}
                    />
                    <PaginateItem 
                        path={`/admin/produtos?page=${page}`}
                        text={page}
                    />
                    <PaginateItem 
                        classContent={page + 1 > pages ? "d-none" : ""}
                        path={`/admin/produtos?page=${page + 1}`}
                        text={page + 1}
                    />
                </>
            )
        }
        return (
            <>
                <PaginateItem 
                        classContent={page - 1 <= 0 ? "d-none" : ""}
                        path={`/admin/produtos?page=${page - 1}`}
                        text={<i className='fas fa-chevron-left'></i>}
                />
                <PaginateItem 
                        classContent={page + 2 > pages ? "d-block" : "d-none"}
                        path={`/admin/produtos?page=${page - 2}`}
                        text={page - 2}
                />
                <PaginateItem 
                        classContent={page - 2 <= 0 ? "d-none" : ""}
                        path={`/admin/produtos?page=${page - 1}`}
                        text={page - 1}
                />
                <PaginateItem
                        path={`/admin/produtos?page=${page}`}
                        text={page}
                />
                <PaginateItem 
                        classContent={page + 1 > pages ? "d-none" : ""}
                        path={`/admin/produtos?page=${page + 1}`}
                        text={page + 1}
                />
                <PaginateItem 
                        classContent={page - 2 <= 0 ? "d-block" : "d-none"}
                        path={`/admin/produtos?page=${page + 2}`}
                        text={page + 2}
                />
                <PaginateItem 
                        classContent={page + 1 > pages ? "d-none" : ""}
                        path={`/admin/produtos?page=${page + 1}`}
                        text={<i className="fas fa-chevron-right"></i>}
                />
            </>
        )
    }

    return (
        <div className="wrapper_paginate">
            <ul>
                {validPaginate(page, pages)}
            </ul>
        </div>
    )
}

export default Paginate