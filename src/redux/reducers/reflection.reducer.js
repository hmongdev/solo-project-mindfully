const reflection = (state = [], action) => {
    switch (action.type) {
        case 'SET_REFLECTION':
            return action.payload;
        case 'CLEAR_ALL':
            return [];
        default:
            return state;
    }
};

export default reflection;
