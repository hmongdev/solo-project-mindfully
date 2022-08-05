const feeling = (state = [], action) => {
    switch (action.type) {
        case 'SET_FEELING':
            return action.payload;
        case 'CLEAR_ALL':
            return [];
        default:
            return state;
    }
};

export default feeling;
