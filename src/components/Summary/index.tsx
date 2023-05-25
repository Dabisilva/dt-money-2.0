import { useSummary } from "../../hooks/useSummary";
import { formatCurrency } from "../../utils/formatCurrency";
import {
  SummaryContainer,
  CardSummary,
  HeaderSummary,
  Title,
  ValueSummary,
  IconArrowCircleUp,
  IconArrowCircleDown,
  IconCurrencyDollar,
} from "./styles";

export function Summary() {
  const summary = useSummary();

  return (
    <SummaryContainer>
      <CardSummary>
        <HeaderSummary>
          <Title>Entradas</Title>
          <IconArrowCircleUp size={32} />
        </HeaderSummary>

        <ValueSummary>{formatCurrency(summary.income)}</ValueSummary>
      </CardSummary>

      <CardSummary>
        <HeaderSummary>
          <Title>Saídas</Title>
          <IconArrowCircleDown size={32} />
        </HeaderSummary>

        <ValueSummary>{formatCurrency(summary.outcome)}</ValueSummary>
      </CardSummary>

      <CardSummary variant="green">
        <HeaderSummary>
          <Title>Total</Title>
          <IconCurrencyDollar size={32} />
        </HeaderSummary>

        <ValueSummary>{formatCurrency(summary.total)}</ValueSummary>
      </CardSummary>
    </SummaryContainer>
  );
}
