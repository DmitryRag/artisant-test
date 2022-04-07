import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Card from './Card'
import Paragraph from './Paragraph'
import Flex from './Flex'

const StyledMain = styled.main`
    padding: 16px 0 0;
`

const CardsList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(305px ,max-content));
    gap: 16px 32px;
    justify-content: space-evenly;
`

const Main = () => {
    const [products, setProducts] = useState([])
    const [checked, setChecked] = useState(false)

    useEffect(() => {
        const getProducts = async () => {
            const response = await axios.get('https://artisant.io/api/products')
            setProducts(response.data.data.products)
        }
        getProducts()
    }, [])

    const filteredProducts = products.filter((product: Product) => {
        return product.quantity_available > 0
    })
    
    let renderedList
    if (checked) {
        renderedList = filteredProducts.map((product: Product) => {
            return <Card key={product.product_id} product={product}/>
        })
    } else {
        renderedList = products.map((product: Product) => {
            return <Card key={product.product_id} product={product}/>
        })
    }

    return (
        <StyledMain>
            <Flex margin={'10px 0 30px'} align={'center'}>
                <Paragraph margin={'0 8px 0 0'} color={'#000'}>Products in stock</Paragraph>
                <input
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    type='checkbox'
                />
            </Flex>
            <CardsList>{renderedList}</CardsList>
        </StyledMain>
    )
}

export default Main