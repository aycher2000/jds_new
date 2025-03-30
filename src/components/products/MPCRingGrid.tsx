import { MPCRingCard, MPCRingCardProps } from './MPCRingCard';

interface MPCRingGridProps {
  products: MPCRingCardProps[];
}

export function MPCRingGrid({ products }: MPCRingGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <MPCRingCard key={product.id} {...product} />
      ))}
    </div>
  );
}