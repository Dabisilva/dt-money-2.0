export interface TransactionData {
  id: number;
  category: string;
  description: string;
  price: number;
  type: "income" | "outcome";
  createdAt: string;
}
