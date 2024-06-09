import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import style from '../../assets/style/listCard.module.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import products from '../../data/dataList';
import Card from './Card';
import { useState } from 'react';

const ListCard = () => {
    let categories = []

    const [search, setSearch] = useState("")
    const [categorie, setCategorie] = useState('All')



    // for (let  i= 0;  i=! product.category; i++) {
    //     categorie=[...categorie,product.category]
    // }

    products.map((product) => {
        if (!categories.includes(product.category)) {
            categories = [...categories, product.category]
        }
    })

    let filtredProduct = products.
        filter((product) => ((product.category == categorie) || categorie == 'All')).
        filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))

    // const [selected,setselected]=useState("")
    // products.filter((prod)=>prod.category.toLowerCase().)



    return (
        <section className={style.listCard}>
            <div className={style.topContent}>
                <Row>
                    <Col lg={3}>
                        <Form.Select aria-label="Default select example" onChange={(e) => setCategorie(e.target.value)}>
                            <option value={'All'}>All</option>
                            {
                                categories.map((category, index) => (
                                    <option key={index} value={category}>{category}</option>

                                ))
                            }
                        </Form.Select>
                    </Col>
                    <Col lg={{ span: 7, offset: 2 }} >
                        <InputGroup className="mb-3" >
                            <Form.Control
                                placeholder="Search your product"
                                aria-label="Search your product"
                                aria-describedby="basic-addon2"
                                onChange={(e) => setSearch(e.target.value)}
                                value={search}
                            />
                            <Button variant="outline-secondary" id="button-addon2">
                                Button
                            </Button>
                        </InputGroup>
                    </Col>
                </Row>
            </div>

            <div className={style.bottomContent}>

                {
                    filtredProduct.map((product) => (
                        <Card key={product.id} product={product} />))
                }
            </div>
        </section>
    )
}

export default ListCard