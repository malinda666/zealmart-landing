'use client'

import { Button } from '@/components/ui/Button'
import React from 'react'
import { useForm } from 'react-hook-form'

const defaultValues = {
  name: '',
  email: '',
  message: '',
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<typeof defaultValues>({
    defaultValues,
    mode: 'all',
  })

  const onContactFormSubmit = (data: typeof defaultValues) => {
    console.log(data)
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onContactFormSubmit)}>
      <div className="flex flex-col mb-4 p-2">
        <label className="text-sm text-border mb-1">Name</label>
        <input
          type="text"
          {...register('name', { required: 'Name is Required' })}
          placeholder="Rachel joe"
          className="relative appearance-none bg-background px-4 py-3 rounded-md border border-white/30 text-sm"
        />
        {errors.name && errors.name.message ? (
          <FormError text={errors.name.message} />
        ) : null}
      </div>
      <div className="flex flex-col mb-4 p-2">
        <label className="text-sm text-border mb-1">Email</label>
        <input
          type="email"
          {...register('email', { required: 'Email is required' })}
          placeholder="rachel@domain.com"
          className="relative appearance-none bg-background px-4 py-3 rounded-md border border-white/30 text-sm"
        />
        {errors.email && errors.email.message ? (
          <FormError text={errors.email.message} />
        ) : null}
      </div>
      <div className="flex flex-col mb-4 p-2">
        <label className="text-sm text-border mb-1">Message</label>
        <textarea
          {...register('message', { required: 'Message is required' })}
          cols={30}
          rows={10}
          className="relative appearance-none bg-background px-4 py-3 rounded-md border border-white/30 text-sm"
        ></textarea>
        {errors.message && errors.message.message ? (
          <FormError text={errors.message.message} />
        ) : null}
      </div>
      <div className="m-2 flex items-center justify-center">
        <Button type="submit" size="lg" className="w-full">
          Submit
        </Button>
      </div>
    </form>
  )
}

const FormError = ({ text }: { text: string }) => (
  <span className="text-red-500 text-xs mt-1">{text}</span>
)
export default ContactForm
