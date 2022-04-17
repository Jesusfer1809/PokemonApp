const initialState = {
  url: "",
}

export const urlReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_URL":
      return {
        ...state,
        url: action.payload,
      }
      break

    default:
      return state
  }
}
