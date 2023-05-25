import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchFormContainer, InputForm, ButtomForm } from './styles'
import { useTransaction } from '../../../../context/TransactionsContext'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {
  const { fetchTransactions } = useTransaction()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <InputForm placeholder="Busque uma transação" {...register('query')} />
      <ButtomForm type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </ButtomForm>
    </SearchFormContainer>
  )
}
