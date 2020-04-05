import React, { useEffect } from 'react'
import AdminProduct from './components/AdminProduct'
import './style.scss'

const AdminProducts = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    })

    return (
        <div className="wrapper_admin_products">
            <div className="container-fluid">
                <div className="wrapper_welcome">
                    <h3>Produtos cadastrados</h3>
                </div>
                <div className="row">
                    <AdminProduct
                        id={1}
                        title="Quadro Pendular"
                        cost="12,00"
                        description="Descrição: Quadro amarelo com detalhes de madeira
                    Descrição: Quadro amarelo com detalhes de madeira
                    Descrição: Quadro amarelo com detalhes de madeira"
                    />
                </div>
            </div>
        </div>
    )
}

export default AdminProducts