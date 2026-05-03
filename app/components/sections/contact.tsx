"use client"

import { ChangeEvent, FormEvent, useState } from 'react'

import { sendEmail } from '@/app/services/sendEmail'

export default function Contact() {
    const [isSending, setIsSending] = useState(false)
    const [message, setMessage] = useState('')
    const [messageType, setMessageType] = useState<'success' | 'error' | ''>('')
    const [phoneValue, setPhoneValue] = useState('')

    function formatPhone(value: string) {
        const digits = value.replace(/\D/g, '').slice(0, 11)
        if (digits.length <= 2) {
            return digits
        }
        if (digits.length <= 6) {
            return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
        }
        if (digits.length <= 10) {
            return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
        }
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
    }

    function handlePhoneChange(event: ChangeEvent<HTMLInputElement>) {
        setPhoneValue(formatPhone(event.target.value))
    }

    function validateForm(form: HTMLFormElement) {
        const formData = new FormData(form)
        const name = String(formData.get('name') || '').trim()
        const email = String(formData.get('email') || '').trim()
        const phone = String(formData.get('phone') || '').trim()
        const content = String(formData.get('message') || '').trim()

        if (!name || !email || !phone || !content) {
            return 'Preencha todos os campos antes de enviar.'
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(email)) {
            return 'Informe um e-mail válido para contato.'
        }

        const phoneDigits = phone.replace(/\D/g, '')
        if (phoneDigits.length < 10) {
            return 'Informe um telefone com DDD.'
        }

        return ''
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const form = event.currentTarget
        const validationMessage = validateForm(form)

        if (validationMessage) {
            setMessageType('error')
            setMessage(validationMessage)
            return
        }

        try {
            setIsSending(true)
            setMessage('')
            setMessageType('')
            await sendEmail(form)
            form.reset()
            setPhoneValue('')
            setMessageType('success')
            setMessage('Mensagem enviada com sucesso. Em breve entraremos em contato.')
        } catch {
            setMessageType('error')
            setMessage('Não foi possível enviar sua mensagem agora. Tente novamente em instantes.')
        } finally {
            setIsSending(false)
        }
    }

    return (
        <section
            id="contato"
            className="relative bg-[linear-gradient(135deg,rgba(230,222,220,0.6),rgba(240,240,245,0.9))]"
        >
            <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
                <div className="text-center">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-primary sm:text-xs sm:tracking-[0.4em]">
                        Contato
                    </span>
                    <h2 className="mt-3 font-cinzel text-2xl sm:text-3xl md:text-4xl">
                        Entre em contato conosco
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-xs text-foreground/70 sm:text-sm">
                        Atendimento presencial e online, com retorno rápido. Preencha o
                        formulário e nossa equipe responde em até 1 dia útil.
                    </p>
                </div>
                <div className="mt-12 grid gap-6 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-2xl bg-header-primary p-6 text-header-text-primary shadow-[0_25px_50px_rgba(0,0,0,0.2)] sm:p-8"
                    >
                        <div className="grid gap-4">
                            <label className="text-[10px] uppercase tracking-[0.18em] text-accent-secundary sm:text-xs sm:tracking-[0.2em]">
                                Nome
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Ex: Maria Souza"
                                    className="mt-2 w-full rounded-md border border-white/10 bg-header-secundary/70 px-4 py-3 text-sm tracking-normal text-header-text-primary placeholder:text-header-text-primary/40"
                                    required
                                />
                            </label>
                            <label className="text-[10px] uppercase tracking-[0.18em] text-accent-secundary sm:text-xs sm:tracking-[0.2em]">
                                E-mail
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Ex: maria@empresa.com.br"
                                    className="mt-2 w-full rounded-md border border-white/10 bg-header-secundary/70 px-4 py-3 text-sm tracking-normal text-header-text-primary placeholder:text-header-text-primary/40"
                                    required
                                />
                            </label>
                            <label className="text-[10px] uppercase tracking-[0.18em] text-accent-secundary sm:text-xs sm:tracking-[0.2em]">
                                Telefone
                                <input
                                    name="phone"
                                    type="tel"
                                    inputMode="tel"
                                    placeholder="Ex: (16) 90000-0000"
                                    className="mt-2 w-full rounded-md border border-white/10 bg-header-secundary/70 px-4 py-3 text-sm tracking-normal text-header-text-primary placeholder:text-header-text-primary/40"
                                    value={phoneValue}
                                    onChange={handlePhoneChange}
                                    required
                                />
                            </label>
                            <label className="text-[10px] uppercase tracking-[0.18em] text-accent-secundary sm:text-xs sm:tracking-[0.2em]">
                                Mensagem
                                <textarea
                                    name="message"
                                    rows={4}
                                    placeholder="Conte brevemente sua demanda"
                                    className="mt-2 w-full rounded-md border border-white/10 bg-header-secundary/70 px-4 py-3 text-sm tracking-normal text-header-text-primary placeholder:text-header-text-primary/40"
                                    required
                                />
                            </label>
                        </div>
                        <button
                            type="submit"
                            disabled={isSending}
                            className="mt-6 w-full rounded-md bg-accent-primary px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-header-primary cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 sm:text-xs sm:tracking-[0.2em]"
                        >
                            {isSending ? 'Enviando...' : 'Enviar mensagem'}
                        </button>
                        {message && (
                            <p
                                className={`mt-4 rounded-md border px-4 py-3 text-sm ${messageType === 'success'
                                    ? 'border-emerald-300/30 bg-emerald-200/10 text-emerald-100'
                                    : 'border-rose-300/30 bg-rose-200/10 text-rose-100'
                                    }`}
                            >
                                {message}
                            </p>
                        )}
                    </form>
                    <div className="relative h-full min-h-70 overflow-hidden rounded-2xl border border-header-primary/10 bg-white/70 shadow-[0_25px_50px_rgba(24,25,35,0.12)] sm:min-h-90 lg:min-h-0">
                        <iframe
                            title="Mapa de localização"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.7502364780617!2d-47.402727399999996!3d-20.5573977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a88580bf1369%3A0xdfb042b67033f63!2sR.%20Maria%20Martins%20de%20Ara%C3%BAjo%2C%20728%20-%20Jardim%20Lima%2C%20Franca%20-%20SP%2C%2014403-117!5e0!3m2!1spt-BR!2sbr!4v1777820978645!5m2!1spt-BR!2sbr"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-full w-full border-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
