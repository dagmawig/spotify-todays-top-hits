export const initialState = {
    features: [
        0, 0, 0, 0, 0, 0
    ],
    data: {
        tracks: {
            items: []
        }
    },
    loadingDisplay: 'none'
}

const reducer = (state, action) => {

    switch (action.type) {
        case "TOGGLE_LOADING":
            return {
                ...state, loadingDisplay: action.loadingDisplay
            };
        case "LOAD_DATA":
            return {
                ...state, data: action.data
            };
        case "UPDATE_FEATURES":
            return {
                ...state, features: action.data
            }
            default:
                return state;
    }
};

export default reducer;