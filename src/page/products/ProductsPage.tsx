import CardProduct from "@/components/card/CardProduct";

function ProductsPage() {
  return (
    <div className="grid grid-cols-3 gap-5" >
      {[1, 2, 3, 4].map((item) => (
        <CardProduct
          key={item}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwGUgDwWx1UWPdAMsqCjDITifOw4waogTK5w&s"
          title="Product Title"
          description="Product Description"
          price={100}
        />
      ))}
    </div>
  );
}

export default ProductsPage;
