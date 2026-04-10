import ProductCard from "@/components/ProductCard";

async function getProducts() {
  const res = await fetch("https://dummyjson.com/products?limit=20");
  const data = await res.json();
  return data.products;
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="p-6">
      <h2 className="text-3xl font-bold text-center mb-8">
        Danh sách sản phẩm
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </main>
  );
}