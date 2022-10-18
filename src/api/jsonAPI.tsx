import axiosService from "./axios.service";

export const userService = {
  allUsers: async () =>
    await axiosService.get("/").then((value) => console.log(value.data)),
};
