import { createDAVClient } from 'tsdav'

export default defineEventHandler(async (event) => {
  const { appleId, appleOtp } = useRuntimeConfig(event)

  const client = await createDAVClient({
    serverUrl: 'https://caldav.icloud.com',
    credentials: {
        username: appleId,
        password: appleOtp,
    },
    authMethod: 'Basic',
    defaultAccountType: 'caldav',
  })

  const cals = await client.fetchCalendars();
  

  return cals
})
