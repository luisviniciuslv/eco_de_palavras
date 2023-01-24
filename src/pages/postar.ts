import { api } from '@/lib/axios'
import { toast } from 'react-toastify'
import { Field, Form, PostarContainer } from '../styles/pages/Postar'
import React, { useState } from 'react'

function generateAndStoreApiKey() {
  // gerar uma chave de API aleatória de 8 dígitos
  let apiKey = Math.floor(Math.random() * 100000000)
    .toString()
    .padStart(8, '0')
  const storedApiKey = localStorage.getItem('apiKey')
  if (storedApiKey) {
    apiKey = storedApiKey
  } else {
    localStorage.setItem('apiKey', apiKey)
  }

  // adicionar a chave de API no cabeçalho da requisição
  api.defaults.headers.common['x-api-key'] = apiKey
  return apiKey
}

export default function Postar() {
  const [author, setAuthor] = useState('')
  const [message, setMessage] = useState('')

  const disabled = author.length === 0 || message.length === 0

  async function HandlerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = {
      author,
      message,
    }

    generateAndStoreApiKey()
    try {
      await api.post('/', data)
      toast('Mensagem Enviada', {
        hideProgressBar: true,
        autoClose: 2000,
        type: 'success',
        position: 'top-left',
      })
      setAuthor('')
      setMessage('')
    } catch (err: any) {
      if (err.response.status === 429) {
        toast('Você pode enviar uma mensagem a cada 5 minutos!', {
          hideProgressBar: true,
          autoClose: 2000,
          type: 'error',
          position: 'top-left',
        })
      } else {
        toast('Algo deu errado, tente novamente mais tarde!', {
          hideProgressBar: true,
          autoClose: 2000,
          type: 'error',
          position: 'top-left',
        })
      }
    }
  }

  return (
    <PostarContainer>
      <Form onSubmit={HandlerSubmit}>
        <Field>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Seu nome"
            required
            maxLength={25}
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
        </Field>
        <Field>
          <label htmlFor="message">Mensagem</label>
          <textarea
            name="message"
            id="message"
            placeholder="Como foi seu dia?"
            required
            maxLength={200}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </Field>
        <button type="submit" disabled={disabled}>
          Enviar
        </button>
      </Form>
    </PostarContainer>
  )
}
