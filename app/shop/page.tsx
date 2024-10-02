import { Header } from '../components/layout/header'
import { Navbar } from '../components/layout/navbar'
import { Footer } from '../components/layout/footer'
import Breadcrumb from '../components/layout/breadcrumb'
import Shopcomponent from '../components/pages/shop/shop'
const paths = [   
    { name: 'Shop', href: '/shop' }, 
  ];
const Shop = () => {
  return (
    <>
     <Header />
      <Navbar />
      <main>
        <div className='container p-4 xl:px-5'> 
            <Breadcrumb paths={paths} />
            <Shopcomponent />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Shop
