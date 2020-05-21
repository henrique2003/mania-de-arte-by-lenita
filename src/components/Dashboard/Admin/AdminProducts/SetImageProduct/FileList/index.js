import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { MdCheckCircle, MdError } from 'react-icons/md'

import './style.scss'

const FileList = ({ file }) => {
  return (
    <ul className="wrapper_file_list">
      {file.file && (
        <li>
          <div className="wrapper_file_content">
            <div className="img" style={{ backgroundImage: "url(" + file.preview + ")" }}></div>
            <div>
              <span>{file.name}</span>
              <span>{file.size}</span>
            </div>
          </div>
          <div>
            {!file.uploaded && !file.error && (
              <CircularProgressbar
                styles={{
                  root: { width: 24 },
                  path: { stroke: 'white' }
                }}
                strokeWidth={10}
                value={file.progress}
              />
            )}

            {!!file.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
            {!!file.error && <MdError size={24} color="#f15e5e" />}
          </div>
        </li>
      )}
    </ul>
  )
}

export default FileList
