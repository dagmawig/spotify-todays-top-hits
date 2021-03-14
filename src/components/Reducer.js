export const initialState = {
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
            default:
                return state;
    }
};

export default reducer;