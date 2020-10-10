import { db } from 'src/lib/db'
import { requireAuth } from 'src/lib/auth'

export const dashboards = async ({ ownerId }) => {
  if (ownerId) {
    const user = await db.user.findOne({ where: { auth0Id: ownerId } })
    if (user) {
      return db.dashboard.findMany({
        where: { userId: user.id },
        include: { user: true }
      })
    } else {
      return db.dashboard.findMany({include: { user: true }})
    }
  } else {
    return db.dashboard.findMany({include: { user: true }})
  }
}

export const dashboard = ({ id }) => {
  return db.dashboard.findOne({
    where: { id },
  })
}

export const createDashboard = async ({ input }) => {
  requireAuth()
  input.user = {
    connect: {
      id: context.currentUser.id
    }
  }
  input.ownerEmail = context.currentUser.email
  return db.dashboard.create({
    data: input,
  })
}

export const updateDashboard = ({ id, input }) => {
  requireAuth()
  input.updatedAt = new Date()
  return db.dashboard.update({
    data: input,
    where: { id },
  })
}

export const deleteDashboard = ({ id }) => {
  requireAuth()
  return db.dashboard.delete({
    where: { id },
  })
}
