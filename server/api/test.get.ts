import { createDAVClient } from 'tsdav'

export default defineEventHandler(async (event) => {
  const { appleId } = useRuntimeConfig(event)

  return appleId
})
