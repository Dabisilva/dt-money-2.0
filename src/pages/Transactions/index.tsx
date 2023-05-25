import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { useTransaction } from "../../context/TransactionsContext";
import { formatCurrency } from "../../utils/formatCurrency";

import {
  TransactionsContainer,
  TransactionsTable,
  TBody,
  Tr,
  Td,
  TransactionsContent,
  PriceHighlight,
} from "./styles";
import { formatData } from "../../utils/formatData";

export function Transactions() {
  const { transactions } = useTransaction();

  return (
    <TransactionsContainer>
      <Header />
      <Summary />

      <TransactionsContent>
        <SearchForm />
        <TransactionsTable>
          <TBody>
            {transactions &&
              transactions.map((transaction) => (
                <Tr key={transaction.id}>
                  <Td width={50}>{transaction.description}</Td>
                  <Td>
                    <PriceHighlight variant={transaction.type}>
                      {transaction.type === "outcome" && "- "}
                      {formatCurrency(transaction.price)}
                    </PriceHighlight>
                  </Td>
                  <Td>{transaction.category}</Td>
                  <Td>{formatData(transaction.createdAt)}</Td>
                </Tr>
              ))}
          </TBody>
        </TransactionsTable>
      </TransactionsContent>
    </TransactionsContainer>
  );
}
