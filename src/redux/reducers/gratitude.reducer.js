const gratitude = (state = [], action) => {
    switch (action.type) {
        case 'SET_GRATITUDE':
            return action.payload;
        case 'CLEAR_ALL':
            return [];
        default:
            return state;
    }
};

export default gratitude;
