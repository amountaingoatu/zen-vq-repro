/* eslint-disable */
import type { Prisma, File } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/vue-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime/vue';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime/vue';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime';
import metadata from './__model_meta';
type DefaultError = Error;

export function useCreateFile(
    options?: Omit<UseMutationOptions<File | undefined, unknown, Prisma.FileCreateArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.FileCreateArgs, File, true>(
        'File',
        'POST',
        `${endpoint}/file/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.FileCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.FileCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, File, Prisma.FileGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.FileCreateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, File, Prisma.FileGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useFindManyFile<
    TArgs extends Prisma.FileFindManyArgs,
    TQueryFnData = Array<Prisma.FileGetPayload<TArgs> & { $optimistic?: boolean }>,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.FileFindManyArgs>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>(
        'File',
        `${endpoint}/file/findMany`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useInfiniteFindManyFile<
    TArgs extends Prisma.FileFindManyArgs,
    TQueryFnData = Array<Prisma.FileGetPayload<TArgs>>,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.FileFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>(
        'File',
        `${endpoint}/file/findMany`,
        args,
        options,
        fetch,
    );
}

export function useFindUniqueFile<
    TArgs extends Prisma.FileFindUniqueArgs,
    TQueryFnData = Prisma.FileGetPayload<TArgs> & { $optimistic?: boolean },
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args: Prisma.SelectSubset<TArgs, Prisma.FileFindUniqueArgs>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>(
        'File',
        `${endpoint}/file/findUnique`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useFindFirstFile<
    TArgs extends Prisma.FileFindFirstArgs,
    TQueryFnData = Prisma.FileGetPayload<TArgs> & { $optimistic?: boolean },
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.FileFindFirstArgs>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>(
        'File',
        `${endpoint}/file/findFirst`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useUpdateFile(
    options?: Omit<UseMutationOptions<File | undefined, unknown, Prisma.FileUpdateArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.FileUpdateArgs, File, true>(
        'File',
        'PUT',
        `${endpoint}/file/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.FileUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.FileUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, File, Prisma.FileGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.FileUpdateArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, File, Prisma.FileGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManyFile(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.FileUpdateManyArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.FileUpdateManyArgs, Prisma.BatchPayload, false>(
        'File',
        'PUT',
        `${endpoint}/file/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.FileUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.FileUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.FileUpdateManyArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertFile(
    options?: Omit<UseMutationOptions<File | undefined, unknown, Prisma.FileUpsertArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.FileUpsertArgs, File, true>(
        'File',
        'POST',
        `${endpoint}/file/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.FileUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.FileUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, File, Prisma.FileGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.FileUpsertArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, File, Prisma.FileGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteFile(
    options?: Omit<UseMutationOptions<File | undefined, unknown, Prisma.FileDeleteArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.FileDeleteArgs, File, true>(
        'File',
        'DELETE',
        `${endpoint}/file/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.FileDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.FileDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, File, Prisma.FileGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.FileDeleteArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, File, Prisma.FileGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManyFile(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.FileDeleteManyArgs, unknown>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.FileDeleteManyArgs, Prisma.BatchPayload, false>(
        'File',
        'DELETE',
        `${endpoint}/file/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.FileDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.FileDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<
                    Prisma.BatchPayload,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.FileDeleteManyArgs>,
                    unknown
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateFile<
    TArgs extends Prisma.FileAggregateArgs,
    TQueryFnData = Prisma.GetFileAggregateType<TArgs>,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args: Prisma.SelectSubset<TArgs, Prisma.FileAggregateArgs>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('File', `${endpoint}/file/aggregate`, args, options, fetch);
}

export function useGroupByFile<
    TArgs extends Prisma.FileGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<'skip', Prisma.Keys<TArgs>>,
        Prisma.Extends<'take', Prisma.Keys<TArgs>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
    ? { orderBy: Prisma.FileGroupByArgs['orderBy'] }
    : { orderBy?: Prisma.FileGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<TArgs['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
        ? never
        : P extends string
        ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
        : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
    }[HavingFields]
    : 'take' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]
    : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<TArgs>
    ? 'orderBy' extends Prisma.Keys<TArgs>
    ? ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]
    : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
        ? never
        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields],
    TQueryFnData = {} extends InputErrors
    ? Array<
        PickEnumerable<Prisma.FileGroupByOutputType, TArgs['by']> & {
            [P in keyof TArgs & keyof Prisma.FileGroupByOutputType]: P extends '_count'
            ? TArgs[P] extends boolean
            ? number
            : Prisma.GetScalarType<TArgs[P], Prisma.FileGroupByOutputType[P]>
            : Prisma.GetScalarType<TArgs[P], Prisma.FileGroupByOutputType[P]>;
        }
    >
    : InputErrors,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args: Prisma.SelectSubset<
        TArgs,
        Prisma.SubsetIntersection<TArgs, Prisma.FileGroupByArgs, OrderByArg> & InputErrors
    >,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('File', `${endpoint}/file/groupBy`, args, options, fetch);
}

export function useCountFile<
    TArgs extends Prisma.FileCountArgs,
    TQueryFnData = TArgs extends { select: any }
    ? TArgs['select'] extends true
    ? number
    : Prisma.GetScalarType<TArgs['select'], Prisma.FileCountAggregateOutputType>
    : number,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.FileCountArgs>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('File', `${endpoint}/file/count`, args, options, fetch);
}
