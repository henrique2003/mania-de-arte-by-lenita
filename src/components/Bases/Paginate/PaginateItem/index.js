import React from 'react'
import { Link } from 'react-router-dom'
import './style.scss'

const PaginateItem = ({ classContent, path, text }) =>
    <Link to={path} className="paginate_item"><li className={classContent}>{text}</li></Link>

PaginateItem.defaultProps = {
    classContent: '',
    path: '/admin/produtos?page=1',
    text: 1
}

export default PaginateItem