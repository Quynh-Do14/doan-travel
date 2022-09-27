const cart = {};
const addItem = (state = cart, action) => {
    switch (action.type) {
        case "ADDITEM":
            return {
                ...state,
                cart: action.payload,
            };
            break;

        default: return state;
            break;

    }

}
export default addItem