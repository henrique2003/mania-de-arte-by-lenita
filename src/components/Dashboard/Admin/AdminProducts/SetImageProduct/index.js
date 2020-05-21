import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import { uniqueId } from 'lodash'
import filesize from 'filesize'

import { loadPrimary } from '../../../../../redux/actions/Auth'
import api from '../../../../../services/api'
import token from '../../../../../config/token'

import { CtnDashboard } from '../../../../Bases'
import FileList from './FileList'

import './style.scss'

const SetImageProduct = ({ loadPrimary, history, match }) => {
  const [upload, setUpload] = useState({})
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    token()
    loadPrimary(history)
  }, [history, loadPrimary, upload])

  const dropzoneMessage = (isDragActive, isDragReject) => {
    if (isDragReject) {
      return <p className="message_dropzone_error">Arquivo inválido, porfavor escolha outro.</p>
    }
    if (!isDragActive) {
      return <p className="message_dropzone_default">Jogue a sua imagem aqui.</p>
    }
    return <p className="message_dropzone_success">Pode soltar sua imagem aqui!</p>
  }

  function updateImage(file) {
    if (file.length > 1) return false

    const newFile = {
      file: file[0],
      id: uniqueId(),
      name: file[0].name,
      size: filesize(file[0].size),
      preview: URL.createObjectURL(file[0]),
      uploaded: false,
      error: false
    }

    setUpload(newFile)

    uploadImage(newFile)
  }

  function uploadImage(file) {
    const data = new FormData()

    data.append('file', file.file, file.name)

    api.put(`/products/${match.params.id}`, data, {
      onUploadProgress: e => {
        const progress = parseInt(Math.round((e.loaded * 100) / e.total))

        setProgress(progress + progress)
      }
    })
  }

  return (
    <CtnDashboard className="wrapper_set_image">
      <div className="wrapper_dropzone">
        <Dropzone accept="image/*" onDropAccepted={updateImage}>
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <div
              className={`wrapper_drop_container 
              ${isDragActive && 'drag_acctive'} 
              ${isDragReject && 'drag_reject'}`}
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {dropzoneMessage(isDragActive, isDragReject)}
            </div>
          )}
        </Dropzone>
        <FileList file={upload} progress={progress} />
      </div>
    </CtnDashboard>
  )
}

const mapDispatchToProps = dispatch => ({
  loadPrimary: (history) => dispatch(loadPrimary(history))
})

export default connect(null, mapDispatchToProps)(withRouter(SetImageProduct))
