const initialState = {}

export default function mainReducer (state = initialState, action) {
  const { type, payload = {} } = action
  switch (type) {
    default:
      return state
  }
}
