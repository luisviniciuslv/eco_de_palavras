import Link from 'next/link'
import Image from 'next/image'
import { HeaderContainer, Navigation } from '../styles/components/Header'
import { Chats, PaperPlaneTilt } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <Navigation>
        <Link href={'/postar'}>
          <PaperPlaneTilt size={24} weight="fill" />
          <p>Postar</p>
        </Link>
        <Link href={'/'}>
          <Chats size={24} weight="fill" />
          <p>Mensagem</p>
        </Link>
      </Navigation>
      <Image src="/logo.svg" alt="Logo" width={262} height={61} />
    </HeaderContainer>
  )
}
