import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { MdCheckCircle, MdError } from 'react-icons/md'

import './style.scss'

const FileList = () => {
  return (
    <ul className="wrapper_file_list">
      <li>
        <div className="wrapper_file_content">
          <img src="https://d9np3dj86nsu2.cloudfront.net/image/8b896070c65d01f7aadb26b341a16bf5" alt="" />
          <div>
            <strong>nome.png</strong>
            <span>120.kb</span>
          </div>
        </div>
        <div>
          <CircularProgressbar
            styles={{
              root: { width: 24 },
              path: { stroke: 'white' }
            }}
            strokeWidth={10}
            value={60}
          />

          <MdCheckCircle size={24} color="#78e5d5" />
          <MdError size={24} color="#f15e5e" />
        </div>
      </li>
    </ul>
  )
}

export default FileList
