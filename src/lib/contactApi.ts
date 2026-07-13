export interface ContactFormData {
  name: string
  company: string
  email: string
  countryCode: string
  phone: string
  service: string
}

export interface ContactApiPayload {
  name: string
  companyName: string
  email: string
  phoneNumber: string
  serviceLookingFor: string
  message: string
}

const API_BASE = import.meta.env.VITE_CONTACTAPI_DEVURL || import.meta.env.VITE_CONTACTAPI_PRODURL
const CONTACT_API_URL = `${API_BASE}/api/contact-growwth`

export function mapGeneralContactPayload(formData: ContactFormData): ContactApiPayload {
  return {
    name: formData.name,
    companyName: formData.company,
    email: formData.email,
    phoneNumber: `${formData.countryCode} ${formData.phone}`.trim(),
    serviceLookingFor: formData.service,
    message: '',
  }
}

export async function sendToContactApi(payload: ContactApiPayload) {
  const response = await fetch(CONTACT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: payload }),
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
