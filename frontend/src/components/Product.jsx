import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

function Product({ product }) {
  const reviewText =
    product.numReviews > 1
      ? `${product.numReviews} reviews`
      : `${product.numReviews} review`
  return (
    <Card className="my-3 p-3 rounded product-card">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a
          href={`/product/${product._id}`}
          className="text-decoration-none product-title"
        >
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>

        <Card.Text as="div">
          <Rating value={product.rating} text={reviewText} id={product._id} />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
