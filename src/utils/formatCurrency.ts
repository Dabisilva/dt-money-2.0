export function formatCurrency(value: number) {
  const formatValue = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)

  return formatValue
}
