import { useState } from 'react'
import { profile } from '../data/site'

// Create a free form at https://formspree.io and put its id in a .env file:
// VITE_FORMSPREE_ID=xxxxxxx
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID

const initialValues = { name: '', email: '', message: '' }

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Please enter your name (at least 2 characters).'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.'
  if (values.message.trim().length < 10)
    errors.message = 'Your message must be at least 10 characters.'
  return errors
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [serverError, setServerError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    if (!FORMSPREE_ID) {
      setStatus('error')
      setServerError(
        `The contact form is not connected yet. Please email me directly at ${profile.email}.`,
      )
      return
    }

    setStatus('loading')
    setServerError('')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setValues(initialValues)
    } catch {
      setStatus('error')
      setServerError(
        `Sorry, your message could not be sent. Please try again or email me at ${profile.email}.`,
      )
    }
  }

  const inputClass = (field) =>
    `mt-1 w-full rounded-lg border bg-slate-950 px-3 py-2 text-slate-100 placeholder-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 ${
      errors[field] ? 'border-red-400' : 'border-slate-700'
    }`

  return (
    <section id="contact" className="scroll-mt-16 bg-slate-900">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-white">Contact</h2>
          <p className="mt-2 text-slate-400">
            Have a question or a project idea? Send me a message.
          </p>
          <ul className="mt-6 space-y-3 text-slate-300">
            <li>
              Email:{' '}
              <a
                className="text-emerald-400 hover:underline"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </li>
            {profile.github && (
              <li>
                GitHub:{' '}
                <a
                  className="text-emerald-400 hover:underline"
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.github.replace('https://', '')}
                </a>
              </li>
            )}
            {profile.linkedin && (
              <li>
                LinkedIn:{' '}
                <a
                  className="text-emerald-400 hover:underline"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {profile.linkedin.replace('https://', '')}
                </a>
              </li>
            )}
          </ul>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-200">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={inputClass('name')}
              placeholder="Your name"
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-400">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-200">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={inputClass('email')}
              placeholder="you@example.com"
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-400">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={values.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className={inputClass('message')}
              placeholder="How can I help you?"
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-400">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full rounded-lg bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 sm:w-auto"
          >
            {status === 'loading' ? 'Sending...' : 'Send message'}
          </button>

          <div aria-live="polite">
            {status === 'success' && (
              <p className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-3 text-sm text-emerald-300">
                Thank you! Your message was sent successfully.
              </p>
            )}
            {status === 'error' && (
              <p
                role="alert"
                className="rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300"
              >
                {serverError}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
