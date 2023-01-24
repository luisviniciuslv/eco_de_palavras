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

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useEffect, useState } from 'react'

export default function Home() {
  const [date, setDate] = useState('')
  const [author, setAuthor] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    handleGetMessage()
  }, [])

  async function handleGetMessage() {
    try {
      const response = await api.get('/')
      setMessage(response.data.message)
      setAuthor(response.data.author)
      setDate(
        formatDistanceToNow(new Date(response.data.date), {
          addSuffix: true,
          locale: ptBR,
        }),
      )
    } catch (err: any) {
      console.log(err)
    }
  }
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
            <strong>{author} uma vez disse:</strong>
          </UserWrapper>
          <Data>{date}</Data>
        </User>
        <MessageText>{message}</MessageText>
      </Message>
    </HomeContainer>
  )
}
