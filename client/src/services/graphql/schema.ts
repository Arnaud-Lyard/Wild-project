import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createSkill: Skill;
  createWilder: Wilder;
  deleteSkill: Scalars['Boolean'];
  deleteWilder: Scalars['Boolean'];
  updateGrade: Scalars['Boolean'];
  updateSkill: Skill;
  updateWilder: Wilder;
};


export type MutationCreateSkillArgs = {
  data: SkillInput;
};


export type MutationCreateWilderArgs = {
  data: WilderInput;
};


export type MutationDeleteSkillArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteWilderArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateGradeArgs = {
  skillId: Scalars['Int'];
  votes: Scalars['Int'];
  wilderId: Scalars['Int'];
};


export type MutationUpdateSkillArgs = {
  data: SkillInput;
  id: Scalars['Int'];
};


export type MutationUpdateWilderArgs = {
  data: WilderInput;
  id: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getSkills: Array<Skill>;
  wilder: Wilder;
  wilders: Array<Wilder>;
};


export type QueryWilderArgs = {
  id: Scalars['Int'];
};

export type Skill = {
  __typename?: 'Skill';
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type SkillId = {
  id: Scalars['Float'];
};

export type SkillInput = {
  name: Scalars['String'];
};

export type SkillOfWilder = {
  __typename?: 'SkillOfWilder';
  id: Scalars['Float'];
  name: Scalars['String'];
  votes: Scalars['Float'];
};

export type Wilder = {
  __typename?: 'Wilder';
  avatarUrl?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
  name: Scalars['String'];
  skills: Array<SkillOfWilder>;
};

export type WilderInput = {
  avatarUrl?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  skills?: InputMaybe<Array<SkillId>>;
};

export type UpdateGradeMutationVariables = Exact<{
  votes: Scalars['Int'];
  skillId: Scalars['Int'];
  wilderId: Scalars['Int'];
}>;


export type UpdateGradeMutation = { __typename?: 'Mutation', updateGrade: boolean };

export type CreateSkillMutationVariables = Exact<{
  data: SkillInput;
}>;


export type CreateSkillMutation = { __typename?: 'Mutation', createSkill: { __typename?: 'Skill', id: number, name: string } };

export type DeleteSkillMutationVariables = Exact<{
  deleteSkillId: Scalars['Int'];
}>;


export type DeleteSkillMutation = { __typename?: 'Mutation', deleteSkill: boolean };

export type GetSkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSkillsQuery = { __typename?: 'Query', getSkills: Array<{ __typename?: 'Skill', id: number, name: string }> };

export type UpdateSkillMutationVariables = Exact<{
  data: SkillInput;
  updateSkillId: Scalars['Int'];
}>;


export type UpdateSkillMutation = { __typename?: 'Mutation', updateSkill: { __typename?: 'Skill', id: number, name: string } };

export type CreateWilderMutationVariables = Exact<{
  data: WilderInput;
}>;


export type CreateWilderMutation = { __typename?: 'Mutation', createWilder: { __typename?: 'Wilder', id: number } };

export type DeleteWilderMutationVariables = Exact<{
  id: Scalars['Int'];
}>;


export type DeleteWilderMutation = { __typename?: 'Mutation', deleteWilder: boolean };

export type WilderQueryVariables = Exact<{
  wilderId: Scalars['Int'];
}>;


export type WilderQuery = { __typename?: 'Query', wilder: { __typename?: 'Wilder', id: number, name: string, city?: string | null, avatarUrl?: string | null, bio?: string | null, skills: Array<{ __typename?: 'SkillOfWilder', id: number, name: string, votes: number }> } };

export type GetWildersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetWildersQuery = { __typename?: 'Query', wilders: Array<{ __typename?: 'Wilder', id: number, name: string, skills: Array<{ __typename?: 'SkillOfWilder', id: number, name: string, votes: number }> }> };

export type UpdateWilderMutationVariables = Exact<{
  id: Scalars['Int'];
  data: WilderInput;
}>;


export type UpdateWilderMutation = { __typename?: 'Mutation', updateWilder: { __typename?: 'Wilder', id: number } };


export const UpdateGradeDocument = gql`
    mutation UpdateGrade($votes: Int!, $skillId: Int!, $wilderId: Int!) {
  updateGrade(votes: $votes, skillId: $skillId, wilderId: $wilderId)
}
    `;
export type UpdateGradeMutationFn = Apollo.MutationFunction<UpdateGradeMutation, UpdateGradeMutationVariables>;

/**
 * __useUpdateGradeMutation__
 *
 * To run a mutation, you first call `useUpdateGradeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGradeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGradeMutation, { data, loading, error }] = useUpdateGradeMutation({
 *   variables: {
 *      votes: // value for 'votes'
 *      skillId: // value for 'skillId'
 *      wilderId: // value for 'wilderId'
 *   },
 * });
 */
export function useUpdateGradeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGradeMutation, UpdateGradeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGradeMutation, UpdateGradeMutationVariables>(UpdateGradeDocument, options);
      }
export type UpdateGradeMutationHookResult = ReturnType<typeof useUpdateGradeMutation>;
export type UpdateGradeMutationResult = Apollo.MutationResult<UpdateGradeMutation>;
export type UpdateGradeMutationOptions = Apollo.BaseMutationOptions<UpdateGradeMutation, UpdateGradeMutationVariables>;
export const CreateSkillDocument = gql`
    mutation CreateSkill($data: SkillInput!) {
  createSkill(data: $data) {
    id
    name
  }
}
    `;
export type CreateSkillMutationFn = Apollo.MutationFunction<CreateSkillMutation, CreateSkillMutationVariables>;

/**
 * __useCreateSkillMutation__
 *
 * To run a mutation, you first call `useCreateSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSkillMutation, { data, loading, error }] = useCreateSkillMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSkillMutation(baseOptions?: Apollo.MutationHookOptions<CreateSkillMutation, CreateSkillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSkillMutation, CreateSkillMutationVariables>(CreateSkillDocument, options);
      }
export type CreateSkillMutationHookResult = ReturnType<typeof useCreateSkillMutation>;
export type CreateSkillMutationResult = Apollo.MutationResult<CreateSkillMutation>;
export type CreateSkillMutationOptions = Apollo.BaseMutationOptions<CreateSkillMutation, CreateSkillMutationVariables>;
export const DeleteSkillDocument = gql`
    mutation DeleteSkill($deleteSkillId: Int!) {
  deleteSkill(id: $deleteSkillId)
}
    `;
export type DeleteSkillMutationFn = Apollo.MutationFunction<DeleteSkillMutation, DeleteSkillMutationVariables>;

/**
 * __useDeleteSkillMutation__
 *
 * To run a mutation, you first call `useDeleteSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSkillMutation, { data, loading, error }] = useDeleteSkillMutation({
 *   variables: {
 *      deleteSkillId: // value for 'deleteSkillId'
 *   },
 * });
 */
export function useDeleteSkillMutation(baseOptions?: Apollo.MutationHookOptions<DeleteSkillMutation, DeleteSkillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteSkillMutation, DeleteSkillMutationVariables>(DeleteSkillDocument, options);
      }
export type DeleteSkillMutationHookResult = ReturnType<typeof useDeleteSkillMutation>;
export type DeleteSkillMutationResult = Apollo.MutationResult<DeleteSkillMutation>;
export type DeleteSkillMutationOptions = Apollo.BaseMutationOptions<DeleteSkillMutation, DeleteSkillMutationVariables>;
export const GetSkillsDocument = gql`
    query GetSkills {
  getSkills {
    id
    name
  }
}
    `;

/**
 * __useGetSkillsQuery__
 *
 * To run a query within a React component, call `useGetSkillsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSkillsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSkillsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetSkillsQuery(baseOptions?: Apollo.QueryHookOptions<GetSkillsQuery, GetSkillsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSkillsQuery, GetSkillsQueryVariables>(GetSkillsDocument, options);
      }
export function useGetSkillsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSkillsQuery, GetSkillsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSkillsQuery, GetSkillsQueryVariables>(GetSkillsDocument, options);
        }
export type GetSkillsQueryHookResult = ReturnType<typeof useGetSkillsQuery>;
export type GetSkillsLazyQueryHookResult = ReturnType<typeof useGetSkillsLazyQuery>;
export type GetSkillsQueryResult = Apollo.QueryResult<GetSkillsQuery, GetSkillsQueryVariables>;
export const UpdateSkillDocument = gql`
    mutation UpdateSkill($data: SkillInput!, $updateSkillId: Int!) {
  updateSkill(data: $data, id: $updateSkillId) {
    id
    name
  }
}
    `;
export type UpdateSkillMutationFn = Apollo.MutationFunction<UpdateSkillMutation, UpdateSkillMutationVariables>;

/**
 * __useUpdateSkillMutation__
 *
 * To run a mutation, you first call `useUpdateSkillMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSkillMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSkillMutation, { data, loading, error }] = useUpdateSkillMutation({
 *   variables: {
 *      data: // value for 'data'
 *      updateSkillId: // value for 'updateSkillId'
 *   },
 * });
 */
export function useUpdateSkillMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSkillMutation, UpdateSkillMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSkillMutation, UpdateSkillMutationVariables>(UpdateSkillDocument, options);
      }
export type UpdateSkillMutationHookResult = ReturnType<typeof useUpdateSkillMutation>;
export type UpdateSkillMutationResult = Apollo.MutationResult<UpdateSkillMutation>;
export type UpdateSkillMutationOptions = Apollo.BaseMutationOptions<UpdateSkillMutation, UpdateSkillMutationVariables>;
export const CreateWilderDocument = gql`
    mutation CreateWilder($data: WilderInput!) {
  createWilder(data: $data) {
    id
  }
}
    `;
export type CreateWilderMutationFn = Apollo.MutationFunction<CreateWilderMutation, CreateWilderMutationVariables>;

/**
 * __useCreateWilderMutation__
 *
 * To run a mutation, you first call `useCreateWilderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateWilderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createWilderMutation, { data, loading, error }] = useCreateWilderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateWilderMutation(baseOptions?: Apollo.MutationHookOptions<CreateWilderMutation, CreateWilderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateWilderMutation, CreateWilderMutationVariables>(CreateWilderDocument, options);
      }
export type CreateWilderMutationHookResult = ReturnType<typeof useCreateWilderMutation>;
export type CreateWilderMutationResult = Apollo.MutationResult<CreateWilderMutation>;
export type CreateWilderMutationOptions = Apollo.BaseMutationOptions<CreateWilderMutation, CreateWilderMutationVariables>;
export const DeleteWilderDocument = gql`
    mutation DeleteWilder($id: Int!) {
  deleteWilder(id: $id)
}
    `;
export type DeleteWilderMutationFn = Apollo.MutationFunction<DeleteWilderMutation, DeleteWilderMutationVariables>;

/**
 * __useDeleteWilderMutation__
 *
 * To run a mutation, you first call `useDeleteWilderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteWilderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteWilderMutation, { data, loading, error }] = useDeleteWilderMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteWilderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteWilderMutation, DeleteWilderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteWilderMutation, DeleteWilderMutationVariables>(DeleteWilderDocument, options);
      }
export type DeleteWilderMutationHookResult = ReturnType<typeof useDeleteWilderMutation>;
export type DeleteWilderMutationResult = Apollo.MutationResult<DeleteWilderMutation>;
export type DeleteWilderMutationOptions = Apollo.BaseMutationOptions<DeleteWilderMutation, DeleteWilderMutationVariables>;
export const WilderDocument = gql`
    query Wilder($wilderId: Int!) {
  wilder(id: $wilderId) {
    id
    name
    city
    avatarUrl
    bio
    skills {
      id
      name
      votes
    }
  }
}
    `;

/**
 * __useWilderQuery__
 *
 * To run a query within a React component, call `useWilderQuery` and pass it any options that fit your needs.
 * When your component renders, `useWilderQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWilderQuery({
 *   variables: {
 *      wilderId: // value for 'wilderId'
 *   },
 * });
 */
export function useWilderQuery(baseOptions: Apollo.QueryHookOptions<WilderQuery, WilderQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<WilderQuery, WilderQueryVariables>(WilderDocument, options);
      }
export function useWilderLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<WilderQuery, WilderQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<WilderQuery, WilderQueryVariables>(WilderDocument, options);
        }
export type WilderQueryHookResult = ReturnType<typeof useWilderQuery>;
export type WilderLazyQueryHookResult = ReturnType<typeof useWilderLazyQuery>;
export type WilderQueryResult = Apollo.QueryResult<WilderQuery, WilderQueryVariables>;
export const GetWildersDocument = gql`
    query GetWilders {
  wilders {
    id
    name
    skills {
      id
      name
      votes
    }
  }
}
    `;

/**
 * __useGetWildersQuery__
 *
 * To run a query within a React component, call `useGetWildersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWildersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWildersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWildersQuery(baseOptions?: Apollo.QueryHookOptions<GetWildersQuery, GetWildersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetWildersQuery, GetWildersQueryVariables>(GetWildersDocument, options);
      }
export function useGetWildersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetWildersQuery, GetWildersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetWildersQuery, GetWildersQueryVariables>(GetWildersDocument, options);
        }
export type GetWildersQueryHookResult = ReturnType<typeof useGetWildersQuery>;
export type GetWildersLazyQueryHookResult = ReturnType<typeof useGetWildersLazyQuery>;
export type GetWildersQueryResult = Apollo.QueryResult<GetWildersQuery, GetWildersQueryVariables>;
export const UpdateWilderDocument = gql`
    mutation UpdateWilder($id: Int!, $data: WilderInput!) {
  updateWilder(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateWilderMutationFn = Apollo.MutationFunction<UpdateWilderMutation, UpdateWilderMutationVariables>;

/**
 * __useUpdateWilderMutation__
 *
 * To run a mutation, you first call `useUpdateWilderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWilderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWilderMutation, { data, loading, error }] = useUpdateWilderMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateWilderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateWilderMutation, UpdateWilderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateWilderMutation, UpdateWilderMutationVariables>(UpdateWilderDocument, options);
      }
export type UpdateWilderMutationHookResult = ReturnType<typeof useUpdateWilderMutation>;
export type UpdateWilderMutationResult = Apollo.MutationResult<UpdateWilderMutation>;
export type UpdateWilderMutationOptions = Apollo.BaseMutationOptions<UpdateWilderMutation, UpdateWilderMutationVariables>;