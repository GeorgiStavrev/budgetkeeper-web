export const types = {
    ADD: "ADD",
    REMOVE: "REMOVE",
    COMPLETE: "COMPLETE",
    SWITCH_OPTION: "SWITCH_OPTION",
    SHOW_ALL: "SHOW_ALL",
    REQUEST_EXPENSES: "REQUEST_EXPENSES",
    RECEIVED_EXPENSES: "RECEIVED_EXPENSES",
    FETCH_MONTHLY_EXPENSES: "FETCH_MONTHLY_EXPENSES"
}

// ACTIONS
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
    },
    requestExpenses: () => {
        return { type: types.REQUEST_EXPENSES };
    },
    receivedExpenses: (json) => {
        return { type: types.RECEIVED_EXPENSES, json: json };
    },
    fetchMonthlyExpenses: () => {
        return function(dispatch) {
            dispatch({ type: types.REQUEST_EXPENSES })
            return fetch(`http://localhost:8080/expenses/monthly`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error),
            )
            .then((json) => {
                dispatch({ type: types.RECEIVED_EXPENSES, json: json });
            })
        }
    }
};

const initialState = {
    showAll: false,
    expenses: [],
    nextId: 3,
    loading: false
};

// REDUCERS
export const reducer = (state = initialState, action) => {
    const { expenses, showAll, nextId } = state
    const { type, payload } = action

    switch (type) {
        case types.ADD: {
            payload.id = nextId
            return {
                ...state,
                expenses: [payload, ...expenses],
                nextId: nextId + 1
            };
        }
        case types.REMOVE: {
            return {
                ...state,
                expenses: expenses.filter((item, index) => item.id !== payload)
            };
        }
        case types.SWITCH_OPTION: {
            return {
                ...state,
                expenses: expenses.map((item, index) => {
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
                expenses: expenses.map((item, index) => {
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
                expenses: expenses
            }
        }
        case types.REQUEST_EXPENSES: {
            return {
                ...state,
                loading: true
            }
        }
        case types.RECEIVED_EXPENSES: {
            return {
                ...state,
                loading: false,
                expenses: action.json
            }
        }
    }

    return state;
};