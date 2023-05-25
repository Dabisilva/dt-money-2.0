export function formatData(value: string) {
  const dataFormated = Intl.DateTimeFormat('pt-BR').format(new Date(value))

  return dataFormated
}
