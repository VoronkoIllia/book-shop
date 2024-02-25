export interface ItemBook {
  id: number;
  author: string;
  title: string;
  image: string;
  price: number;
  shortDescription: string;
}
export interface SpecificBook extends ItemBook {
  level: string;
  tags: Array<string>;
  amount: number;
  description: string;
}
