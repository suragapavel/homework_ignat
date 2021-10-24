const initState = {
    isLoading: false
}

export const loadingReducer = (state = initState, action: LoadingACType): typeof initState => {
    switch (action.type) {
        case 'LOADING': {
            return {
                ...state,
                isLoading: action.isLoading
            }

        }
        default:
            return state
    }
}

export type LoadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => {
    return {type: 'LOADING', isLoading} as const
}