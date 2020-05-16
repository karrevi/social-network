const pokemonReducer = (state = {}, action) => {
    switch (action.type) {
        case 'POKEMON':
            return {
                ...state,
                pokemon: action.payload
            }
            case 'POKEMON_DETAILS':
                return {
                    ...state,
                    details: action.payload
                }
                default:
                    return state;
    }
};


export default pokemonReducer;