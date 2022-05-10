import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import ListaProdutos from '../listaProdutos/ListaProdutos'

export default function ProdutoItem(props) {

    const produto = props.produto || []

    return(
        <>
        <h1>Porduto</h1>
            {
                <div>
                    <h2> {produto.id} {produto.nome} R${produto.preco} </h2>
                    <Link to='/'>Voltar a home</Link>
                </div>
            }
        </>
    )
}

