import ProductCard from './components/ProductCard';
import { products } from './data/products';

const Home = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
