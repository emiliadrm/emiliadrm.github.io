const initialState = {
  fetching: false,
  dog: null,
  error: null,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'DEFAULT':
      return state;
    default:
      return state;
  }
}
