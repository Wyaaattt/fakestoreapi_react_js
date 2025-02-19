import { useEffect, useState } from "react";
import { fetchProducts } from "./ApiService";
import { Link } from "react-router-dom";
import "./component.css"
import { Button, Card, CardBody, Col, Row } from "react-bootstrap";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.log("Error fething products:", error);
      }
    };
    getProducts();
  }, []);
  return (
    <div>
      <h1>List of Items</h1>
      <Row>
        {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={2} lg={2}>
                <Card style={{ marginBottom: "1rem", display:"flex", flexDirection: "column"}}>
                    <Card.Img variant="top" src={product.image} style={{ objectFit: "cover", height: "120px", width:"100%"}}/>
                    <CardBody style={{ flex: "1"}}>
                        <Card.Text style={{ height: "60px", overflow: "hidden",}}>{product.title}</Card.Text>
                        <Card.Text>${product.price}</Card.Text>
                        <Link className="d-flex justify-content-center" to={`/detail/${product.id}`}>
                            <Button variant="primary">View Details</Button>
                        </Link>
                    </CardBody>
                </Card>
            </Col>
        ))}
      </Row>
    </div>
  );
};
export default Home;
