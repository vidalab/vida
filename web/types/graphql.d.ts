export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};

export type CreateDashboardInput = {
  name: Scalars['String'];
  json: Scalars['String'];
};

export type Dashboard = {
  __typename?: 'Dashboard';
  id: Scalars['String'];
  name: Scalars['String'];
  json: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  user: User;
  ownerEmail: Scalars['String'];
};





export type Mutation = {
  __typename?: 'Mutation';
  createDashboard: Dashboard;
  updateDashboard: Dashboard;
  deleteDashboard: Dashboard;
};


export type MutationCreateDashboardArgs = {
  input: CreateDashboardInput;
};


export type MutationUpdateDashboardArgs = {
  id: Scalars['String'];
  input: UpdateDashboardInput;
};


export type MutationDeleteDashboardArgs = {
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  dashboard: Dashboard;
  dashboards: Array<Dashboard>;
  getViz: VizJson;
  redwood?: Maybe<Redwood>;
};


export type QueryDashboardArgs = {
  id: Scalars['String'];
};


export type QueryDashboardsArgs = {
  ownerId: Scalars['String'];
};


export type QueryGetVizArgs = {
  name: Scalars['String'];
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};


export type UpdateDashboardInput = {
  name?: Maybe<Scalars['String']>;
  json?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
  auth0Id: Scalars['String'];
};

export type VizJson = {
  __typename?: 'VizJson';
  name: Scalars['String'];
  vizName: Scalars['String'];
};

export type Find_Dashboard_By_IdVariables = Exact<{
  id: Scalars['String'];
}>;


export type Find_Dashboard_By_Id = (
  { __typename?: 'Query' }
  & { dashboard: (
    { __typename?: 'Dashboard' }
    & Pick<Dashboard, 'id' | 'name' | 'json' | 'createdAt' | 'updatedAt'>
  ) }
);

export type DeleteDashboardMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteDashboardMutation = (
  { __typename?: 'Mutation' }
  & { deleteDashboard: (
    { __typename?: 'Dashboard' }
    & Pick<Dashboard, 'id'>
  ) }
);

export type DashboardsVariables = Exact<{
  ownerId: Scalars['String'];
}>;


export type Dashboards = (
  { __typename?: 'Query' }
  & { dashboards: Array<(
    { __typename?: 'Dashboard' }
    & Pick<Dashboard, 'id' | 'name' | 'createdAt' | 'updatedAt'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'auth0Id'>
    ) }
  )> }
);

export type UpdateDashboardMutationVariables = Exact<{
  id: Scalars['String'];
  input: UpdateDashboardInput;
}>;


export type UpdateDashboardMutation = (
  { __typename?: 'Mutation' }
  & { updateDashboard: (
    { __typename?: 'Dashboard' }
    & Pick<Dashboard, 'id' | 'json'>
  ) }
);

export type CreateDashboardMutationVariables = Exact<{
  input: CreateDashboardInput;
}>;


export type CreateDashboardMutation = (
  { __typename?: 'Mutation' }
  & { createDashboard: (
    { __typename?: 'Dashboard' }
    & Pick<Dashboard, 'id'>
  ) }
);

export type Unnamed_1_Variables = Exact<{
  name: Scalars['String'];
}>;


export type Unnamed_1_ = (
  { __typename?: 'Query' }
  & { result: (
    { __typename?: 'VizJson' }
    & Pick<VizJson, 'name' | 'vizName'>
  ) }
);
