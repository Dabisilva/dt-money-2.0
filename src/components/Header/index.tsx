import * as Dialog from '@radix-ui/react-dialog'

import logoSvg from '../../assets/logo.svg'

import {
  HeaderContainer,
  HeaderContent,
  NewTransactionButton,
  Logo,
} from './styles'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src={logoSvg} />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
