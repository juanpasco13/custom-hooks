export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'add':
            return [...initialState, action.payload];
        case 'delete':
            return initialState.filter(todo => todo.id!== action.payload);     
        case 'update':
            return initialState.map(todo => {
                if(todo.id === action.payload ){
                    return {
                       ...todo,
                        done:!todo.done
                    }
                }
                return todo;
            });
        
        default:
            return initialState;
    }
}