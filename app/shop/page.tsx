
import Breadcrumb from '../components/layout/breadcrumb'
import Layout from '../components/layout/layout';
import Shopcomponent from '../components/pages/shop/shop'
const paths = [
  { name: 'Shop', href: '/shop' },
];
const Shop = () => {
  return (
    <>
      <Layout>
        <Breadcrumb paths={paths} />
        <Shopcomponent />
      </Layout>
    </>
  )
}

export default Shop
