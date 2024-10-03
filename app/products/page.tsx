import React from 'react'
import Breadcrumb from '../components/layout/breadcrumb'
import Layout from '../components/layout/layout';
import Productscomponent from '../components/pages/products/products';
const paths = [
    { name: 'products', href: '/products' },
  ];
function Product() {
  return (
    <>
      <Layout>
        <Breadcrumb paths={paths} />
        <Productscomponent />
      </Layout>
    </>
  )
}

export default Product
