export const types = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    COMPLETE: "COMPLETE",
    SWITCH_OPTION: "SWITCH_OPTION",
    SHOW_ALL: "SHOW_ALL"
}

export const actionCreators = {
    add: (text) => {
        const newItem = { text: text, important: false, completed: false };
        return { type: types.ADD, payload: newItem };
    },
    remove: index => {
        return { type: types.REMOVE, payload: index };
    },
    complete: index => {
        return { type: types.COMPLETE, payload: index };
    },
    switchOption: index => {
        return { type: types.SWITCH_OPTION, payload: index };
    },
    showAll: () => {
        return { type: types.SHOW_ALL };
    }
};

const initialState = {
    showAll: false,
    todos: [
        { text:"Item1", important: false, completed: false, id: 0 },
        { text:"Item2", important:false, completed: false, id: 1 },
        { text:"Item3", important: false, completed: false, id: 2 }],
    nextId: 3
};

export const reducer = (state = initialState, action) => {
    const { todos, showAll, nextId } = state
    const { type, payload } = action

    switch (type) {
        case types.ADD: {
            payload.id = nextId
            return {
                ...state,
                todos: [payload, ...todos],
                nextId: nextId + 1
            };
        }
        case types.REMOVE: {
            return {
                ...state,
                todos: todos.filter((item, index) => item.id !== payload)
            };
        }
        case types.SWITCH_OPTION: {
            return {
                ...state,
                todos: todos.map((item, index) => {
                    if (item.id === payload) {
                        item.important = !item.important;
                    }

                    return item;
                })
            }
        }
        case types.COMPLETE: {
            return {
                ...state,
                todos: todos.map((item, index) => {
                    if (item.id === payload) {
                        item.completed = !item.completed;
                    }

                    return item;
                })
            }
        }
        case types.SHOW_ALL: {
            return {
                ...state,
                showAll: !showAll,
                todos: todos
            }
        }
    }

    return state;
};