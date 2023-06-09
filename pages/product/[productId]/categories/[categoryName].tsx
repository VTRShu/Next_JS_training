import { useRouter } from 'next/router';

export default function CategoryName() {
  const router = useRouter();
  const { productId = '', categoryName = '' } = router.query;
  return (
    <h1>
      Product detail Page {productId} in {categoryName}
    </h1>
  );
}
