const initialState = {
  user: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return { user: action.payload }
      break

    default:
      return state
  }
}
