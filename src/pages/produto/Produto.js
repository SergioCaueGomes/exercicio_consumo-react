import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import ProdutoItem from '../../components/produtoItem/ProdutoItem'

function Produto() {

    const { id } = useParams()

    const [produto, setProduto] = useState({})

    useEffect(()=>{
        axios.get(`http://localhost:3001/${id}`)
        .then((response) => {
            setProduto(response.data)
        })
        .catch((error) => {
            console.error(error)
        })
    }, [])

    return(
        <>
        <ProdutoItem produto={produto}/>
        </>
    )
}

export default Produto