import React from 'react'
import './style.scss'

const Warning = ({ color, text }) => <p className={`warning ${color}`}>{text}</p>

export default Warning