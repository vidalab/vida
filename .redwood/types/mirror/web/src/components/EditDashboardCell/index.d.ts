// This file was generated by RedwoodJS
import type { ComponentProps } from 'react'

import { Success } from './EditDashboardCell'
import type { FIND_DASHBOARD_BY_ID, FIND_DASHBOARD_BY_IDVariables } from 'types/graphql'

type SuccessType = typeof Success

export * from './EditDashboardCell'

type CellInputs = Omit<
  ComponentProps<SuccessType>,
  keyof QueryOperationResult | keyof FIND_DASHBOARD_BY_ID | 'updating'
> & FIND_DASHBOARD_BY_IDVariables

export default function (props: CellInputs): ReturnType<SuccessType>
