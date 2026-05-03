import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_fe9dp9w'
const TEMPLATE_ID = 'template_y8l1yuh'
const PUBLIC_KEY = '4V0jzC-UgBNhpq44W'

export async function sendEmail(form: HTMLFormElement) {
    return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
    })
}
