const detail = (state = [], action) => {
    switch (action.type) {
        case 'SET_DETAIL':
            return action.payload;
        case 'CLEAR_ALL':
            return [];
        default:
            return state;
    }
};

export default detail;
