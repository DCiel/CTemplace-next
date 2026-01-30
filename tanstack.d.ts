import '@tanstack/react-query'

type QueryKey = ['', ...ReadonlyArray<unknown>]

interface QueryDataMap {

}

declare module '@tanstack/react-query' {
    interface Register {
        queryKey: QueryKey
        mutationKey: QueryKey
        defaultError: Error
    }
}