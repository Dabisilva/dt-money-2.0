import styled, { css } from "styled-components";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;
`;

interface CardSummaryProps {
  variant?: "green";
}

export const CardSummary = styled.div<CardSummaryProps>`
  background: ${({ theme }) => theme["gray-600"]};
  border-radius: 6px;
  padding: 2rem;

  ${({ variant }) =>
    variant === "green" &&
    css`
      background: ${({ theme }) => theme["green-700"]};
    `}
`;

export const HeaderSummary = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: ${({ theme }) => theme["gray-300"]};
`;

export const Title = styled.span``;

export const ValueSummary = styled.strong`
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
`;

//icons

export const IconArrowCircleUp = styled(ArrowCircleUp)`
  color: ${({ theme }) => theme["green-300"]};
`;

export const IconArrowCircleDown = styled(ArrowCircleDown)`
  color: ${({ theme }) => theme["red-300"]};
`;

export const IconCurrencyDollar = styled(CurrencyDollar)`
  color: ${({ theme }) => theme.white};
`;
