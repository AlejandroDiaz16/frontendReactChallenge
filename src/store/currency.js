
const initialState = {
    currency: 'CAD'
}

const currencyReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SET_CURRENCY':
            return {
                ...state, currency: action.value
            }
        default:
            return state
    }
}

export const setcurrency = (currency) => ({
    type: 'SET_currency',
    value: currency
})

export default currencyReducer;