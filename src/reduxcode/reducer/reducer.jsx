const initialState = {
  list: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "add":
      const { id, data } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case "remove":
      const newList = state.list.filter((elem) => elem.id !== action.id);

      return {
        ...state,
        list: newList,
      };

    default:
      return state;
  }
};

export default reducer;
