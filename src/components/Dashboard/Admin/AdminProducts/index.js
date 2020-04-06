import React, { useEffect, useState } from 'react'
import AdminProduct from './AdminProduct'
import Paginate from '../../../Bases/Paginate'
import Warning from '../../../Bases/Warning'
import './style.scss'

const AdminProducts = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })
    
    const [ProductData] = useState([
        {
            'id': 1,
            'title': 'Quadro Pendular',
            'cost': '12,00',
            'description': 'Descrição: Quadro amarelo com detalhes de madeira Descrição: Quadro amarelo com detalhes de madeiraDescrição: Quadro amarelo com detalhes de madeira',
            'image': 'produto-test.jpg'
        },
        {
            'id': 2,
            'title': 'Quadro Pendular',
            'cost': '12,00',
            'description': 'Descrição: Quadro amarelo com detalhes de madeira Descrição: Quadro amarelo com detalhes de madeiraDescrição: Quadro amarelo com detalhes de madeira',
            'image': 'produto-test.jpg'
        },
        {
            'id': 3,
            'title': 'Quadro Pendular',
            'cost': '12,00',
            'description': 'Descrição: Quadro amarelo com detalhes de madeira Descrição: Quadro amarelo com detalhes de madeiraDescrição: Quadro amarelo com detalhes de madeira',
            'image': 'produto-test.jpg'
        }
    ])

    return (
        <div className="wrapper_admin_products">
            <div className="container-fluid">
                <div className="wrapper_welcome">
                    <h3>Produtos cadastrados</h3>
                </div>
                <div className="row">
                {ProductData.length === 0 ?
                        <Warning color="greey" text="Sem produtos no momento!" /> :
                        ProductData.map((product) => (
                            <AdminProduct
                                data={product}
                            />
                        ))
                    }
                </div>
                <Paginate paginate={{
                    "page": 1,
                    "pages": 3
                }} />
            </div>
        </div>
    )
}

export default AdminProducts