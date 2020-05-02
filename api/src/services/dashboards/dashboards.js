import { db } from 'src/lib/db'

export const dashboards = () => {
  return db.dashboard.findMany()
}

export const dashboard = ({ id }) => {
  return db.dashboard.findOne({
    where: { id },
  })
}

export const createDashboard = ({ input }) => {
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
