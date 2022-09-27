const result = {};
const searchResult = (state = result, action) => {
    switch (action.type) {
        case 'RESULT_SEARCH':
            return {
                ...state,
                result: action.payload
            };
            break;
        default: return state;
            break;
    }
}
export default searchResult;