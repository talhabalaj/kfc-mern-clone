import { config } from 'dotenv'

import setupWebServer from './setupWebServer.js'
import setupDb from './setupDb.js'

// Load env
config()

await setupDb()
await setupWebServer()
