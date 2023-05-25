import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from 'react'
import { TransactionData } from '../@types/transactionsType'
import { api } from '../lib/axios'

interface CreateNewTransactionInput {
  category: string
  description: string
  price: number
  type: 'income' | 'outcome'
}

interface TransactionContextType {
  transactions: TransactionData[]
  fetchTransactions(query?: string): Promise<void>
  createNewTransaction(data: CreateNewTransactionInput): Promise<void>
}

const TransactionContext = createContext({} as TransactionContextType)

interface TransactionProviderProps {
  children: ReactNode
}

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionData[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })

    setTransactions(response.data)
  }

  async function createNewTransaction(data: CreateNewTransactionInput) {
    const { description, category, price, type } = data

    const response = await api.post('transactions', {
      description,
      category,
      price,
      type,
      createdAt: new Date(),
    })

    setTransactions((prevValue) => [response.data, ...prevValue])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createNewTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  )
}

export function useTransaction() {
  return useContext(TransactionContext)
}
