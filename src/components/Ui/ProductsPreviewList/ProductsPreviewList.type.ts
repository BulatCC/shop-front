import { ProductCard } from '../../../types/ProductCard';

export interface ProductsPreviewListProps {
    products: ProductCard[];
    title: string;
    link: string;
    anchor?: string;
}
