const initialState = {
  slides: [],
}

export const slideReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SLIDES":
      return {
        ...state,
        slides: action.payload,
      }
      break

    default:
      return state
  }
}
