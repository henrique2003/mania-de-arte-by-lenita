import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const Paginate = ({ paginate }) => {
    const { page, pages } = paginate

    function validPaginate(page, pages) {
        if (pages <= 3) {
            if (page === 1) return false
            return (
                <>
                    <li className={page - 2 <= 0 ? "d-none" : ""}>
                        <Link to={`/admin/produtos?page=${page - 2}`}>{page - 2}</Link>
                    </li>
                    <li>
                        <Link to={`/admin/produtos?page=${page - 1}`}>{page - 1}</Link>
                    </li>
                    <li>
                        <Link to={`/admin/produtos?page=${page}`}>{page}</Link>
                    </li>
                    <li className={page + 1 > pages ? "d-none" : ""}>
                        <Link to={`/admin/produtos?page=${page + 1}`}>{page + 1}</Link>
                    </li>
                </>
            )
        }
        return (
            <>
                <li className={page - 1 <= 0 ? "d-none" : ""}>
                    <Link to={`/admin/produtos?page=${page - 1}`}><i className="fas fa-chevron-left"></i></Link>
                </li>
                <li className={page + 2 > pages ? "d-block" : "d-none"}>
                    <Link to={`/admin/produtos?page=${page - 2}`}>{page - 2}</Link>
                </li>
                <li className={page - 2 <= 0 ? "d-none" : ""}>
                    <Link to={`/admin/produtos?page=${page - 1}`}>{page - 1}</Link>
                </li>
                <li>
                    <Link to={`/admin/produtos?page=${page}`}>{page}</Link>
                </li>
                <li className={page + 1 > pages ? "d-none" : ""}>
                    <Link to={`/admin/produtos?page=${page + 1}`}>{page + 1}</Link>
                </li>
                <li className={page - 2 <= 0 ? "d-block" : "d-none"}>
                    <Link to={`/admin/produtos?page=${page + 2}`}>{page + 2}</Link>
                </li>
                <li className={page + 1 > pages ? "d-none" : ""}>
                    <Link to={`/admin/produtos?page=${page + 1}`}><i className="fas fa-chevron-right"></i></Link>
                </li>
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