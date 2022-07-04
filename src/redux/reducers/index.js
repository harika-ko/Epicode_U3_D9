const initialState = {
    favorites: [],
}

const mainReducer = (state = initialState, action) => {

    const { type, payload } = action

    switch (type) {
        case 'ADD_TO_FAV':
            return {
                ...state,
                favorites: [...state.favorites, payload]
            }
        case 'REMOVE_FROM_FAV':
            return {
                ...state,
                favorites: state.favorites.filter((company) => company !== payload),
            }
        default: return state
    }
}

export default mainReducer