const feeling = (state = [], action) => {
    switch (action.type) {
        case 'SET_FEELING':
            return action.payload;
        default:
            return state;
    }
};

export default feeling;
