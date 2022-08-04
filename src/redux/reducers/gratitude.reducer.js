const gratitude = (state = {}, action) => {
    switch (action.type) {
        case 'SET_GRATITUDE':
            return action.payload;
        default:
            return state;
    }
};

export default gratitude;
