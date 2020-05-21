import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'

import { loadPrimary } from '../../../../../redux/actions/Auth'
import token from '../../../../../config/token'

import { CtnDashboard } from '../../../../Bases'
import FileList from './FileList'

import './style.scss'

const SetImageProduct = ({ loadPrimary, history }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
    token()
    loadPrimary(history)
  }, [history, loadPrimary])

  const dropzoneMessage = (isDragActive, isDragReject) => {
    if (isDragReject) {
      return <p className="message_dropzone_error">Arquivo inválido, porfavor escolha outro.</p>
    }
    if (!isDragActive) {
      return <p className="message_dropzone_default">Jogue a sua imagem aqui.</p>
    }
    return <p className="message_dropzone_success">Pode soltar sua imagem aqui!</p>
  }

  return (
    <CtnDashboard className="wrapper_set_image">
      <div className="wrapper_dropzone">
        <Dropzone accept="image/*" onDropAccepted={() => { }}>
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <div
              className={`wrapper_drop_container 
              ${isDragActive && 'drag_acctive'} 
              ${isDragReject && 'drag_reject'}`}
              {...getRootProps()}
              isDragActive={isDragActive}
              isDragReject={isDragReject}
            >
              <input {...getInputProps()} />
              {dropzoneMessage(isDragActive, isDragReject)}
            </div>
          )}
        </Dropzone>
        <FileList />
      </div>
    </CtnDashboard>
  )
}

const mapDispatchToProps = dispatch => ({
  loadPrimary: (history) => dispatch(loadPrimary(history))
})

export default connect(null, mapDispatchToProps)(withRouter(SetImageProduct))
