export default interface IProduct {
  id: string;
  name: string;
  sales: number;
  category: string;
  created_at: Date;
  image_url: string;
  description: string;
  price_in_cents: number;
}
