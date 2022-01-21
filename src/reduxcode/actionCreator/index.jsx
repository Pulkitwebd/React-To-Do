export const addTask = (data) => {
  return {
    type: "add",
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const removeTask = (id) => {
  return { type: "remove", id };
};
