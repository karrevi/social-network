const characterReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CHARACTER':
            return {
                ...state,
                character: action.payload
            }
            default:
                return state;
    }
};


export default characterReducer;