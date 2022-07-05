const initialState = {
    elements: [],
}

const jobsReducer = (state = initialState, action) => {
    console.log(action, state)

    const { type, payload } = action

    switch (type) {
        case 'FETCH_JOBS':
            return {
                ...state,
                elements: payload,
            }
        default:
            return state
    }
}

export default jobsReducer