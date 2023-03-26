import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();
  console.log("🚀 ~ ProductDetailPage ~ params:", params);
  return <div>Product Detail Page - {params.id}</div>;
}

export default ProductDetailPage;
