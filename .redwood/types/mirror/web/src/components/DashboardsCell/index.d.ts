// This file was generated by RedwoodJS
import type { ComponentProps } from 'react'

import { Success } from './DashboardsCell'
import type { DASHBOARDS, DASHBOARDSVariables } from 'types/graphql'

type SuccessType = typeof Success

export * from './DashboardsCell'

type CellInputs = Omit<
  ComponentProps<SuccessType>,
  keyof QueryOperationResult | keyof DASHBOARDS | 'updating'
> & DASHBOARDSVariables

export default function (props: CellInputs): ReturnType<SuccessType>
