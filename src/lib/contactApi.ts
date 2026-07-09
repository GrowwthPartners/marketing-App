export interface ContactFormData {
  name: string
  company: string
  email: string
  countryCode: string
  phone: string
  service: string
}

export interface ContactApiPayload extends ContactFormData {
  fullPhone: string
  source: string
  submittedAt: string
}
const API_BASE = import.meta.env.VITE_CONTACTAPI_DEVURL || import.meta.env.VITE_CONTACTAPI_PRODURL

const CONTACT_API_URL = `${API_BASE}/api/contact-growwth`;

export function mapGeneralContactPayload(formData: ContactFormData): ContactApiPayload {
  return {
    ...formData,
    fullPhone: `${formData.countryCode} ${formData.phone}`.trim(),
    source: 'fractional-cfo-hero',
    submittedAt: new Date().toISOString(),
  }
}

export async function sendToContactApi(payload: ContactApiPayload) {
  const response = await fetch(CONTACT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    throw new Error(`Contact API request failed with status ${response.status}`)
  }

  const contentType = response.headers.get('content-type')

  if (contentType?.includes('application/json')) {
    return response.json() as Promise<unknown>
  }

  return null
}
