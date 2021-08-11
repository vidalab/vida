import {
  createGraphQLHandler,
  makeMergedSchema,
  makeServices,
} from '@redwoodjs/api'
import schemas from 'src/graphql/**/*.{js,ts}'
import services from 'src/services/**/*.{js,ts}'

import { getCurrentUser } from 'src/lib/auth.js'
import { logger } from 'src/lib/logger'

import { db } from 'src/lib/db'

export const handler = createGraphQLHandler({
  loggerConfig: { logger, options: {} },
  getCurrentUser,
  schema: makeMergedSchema({
    schemas,
    services: makeServices({ services }),
  }),
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})
