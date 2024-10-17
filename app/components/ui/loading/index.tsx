import ProductItemLoading from './loader';

const ProductsLoading = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5"> 
      <ProductItemLoading />
      <ProductItemLoading />
      <ProductItemLoading />
      <ProductItemLoading />
      <ProductItemLoading />
      <ProductItemLoading />
    </div>
  );
};
  
export default ProductsLoading