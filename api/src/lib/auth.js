// Define what you want `currentUser` to return throughout your app. For example,
// to return a real user from your database, you could do something like:
//
//   export const getCurrentUser = async ({ email }) => {
//     return await db.user.findOne({ where: { email } })
//   }

import { db } from 'src/lib/db'
import { AuthenticationError } from '@redwoodjs/api'

export const getCurrentUser = async (jwt) => {
  const email = jwt[process.env.AUTH0_NAMESPACE + 'email']
  if (!email) {
    throw new AuthenticationError('Authentication fails.')
  }

  let user = await db.user.findOne({ where: { email } })
  if (!user) {
    user = await db.user.create({ data: { email: email, auth0Id: jwt.sub } })
  }
  return user
}

// Use this function in your services to check that a user is logged in, and
// optionally raise an error if they're not.

export const requireAuth = () => {
  if (!context.currentUser) {
    throw new AuthenticationError("You don't have permission to do that.")
  }
}
