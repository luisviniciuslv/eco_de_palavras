import {
  Data,
  HomeContainer,
  Message,
  MessageText,
  User,
  UserWrapper,
} from '../styles/pages/Home'
import Image from 'next/image'
import { api } from '@/lib/axios'
import { GetStaticProps } from 'next'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface HomeProps {
  author: string
  message: string
  date: string
}

export default function Home(props: HomeProps) {
  const formattedDate = formatDistanceToNow(new Date(props.date), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <HomeContainer>
      <Message>
        <User>
          <UserWrapper>
            <Image
              src="https://media.discordapp.net/attachments/965672339931025468/1067158470765318174/default-avatar-1.png"
              alt=""
              width={60}
              height={60}
            />
            <strong>{props.author} uma vez disse:</strong>
          </UserWrapper>
          <Data>{formattedDate}</Data>
        </User>
        <MessageText>{props.message}</MessageText>
      </Message>
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps<any> = async () => {
  try {
    const response = await api.get('/')

    return {
      props: {
        author: response.data.author,
        message: response.data.message,
        date: response.data.date,
      },
      revalidate: 1,
    }
  } catch (err: any) {
    return {
      notFound: true,
    }
  }
}
