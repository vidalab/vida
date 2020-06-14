import { db } from 'src/lib/db'
import { getCurrentUser } from 'src/lib/auth'

export const dashboards = async ({ ownerId }) => {
  if (ownerId) {
    return db.dashboard.findMany({
      where: { ownerId: ownerId },
    })
  } else {
    return db.dashboard.findMany()
  }
}

export const dashboard = ({ id }) => {
  return db.dashboard.findOne({
    where: { id },
  })
}

export const createDashboard = ({ input }) => {
  input.ownerId = context.currentUser.sub
  return db.dashboard.create({
    data: input,
  })
}

export const updateDashboard = ({ id, input }) => {
  input.updatedAt = new Date()
  return db.dashboard.update({
    data: input,
    where: { id },
  })
}

export const deleteDashboard = ({ id }) => {
  return db.dashboard.delete({
    where: { id },
  })
}
