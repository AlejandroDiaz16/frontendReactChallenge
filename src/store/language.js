const initialState = {
    language: 'en'
}

const languageReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_LANGUAGE':
            return {
                ...state, language: action.payload // changed 'value' to 'payload'
            }
        default:
            return state
    }
}

export const setLanguage = (language) => ({
    type: 'SET_LANGUAGE',
    payload: language  // changed 'value' to 'payload'
})

export default languageReducer;
