import { configureStore, createSlice } from "@reduxjs/toolkit";

// useState 역할
let user = createSlice({
  name: "user",
  initialState: {
    createdDate: "",
    email: "",
    nickname: "",
    picture: "",
    isLogin: false,
  },
  reducers: {
    saveUser(state, action) {
      state.createdDate = action.payload.createdDate;
      state.email = action.payload.email;
      state.nickname = action.payload.nickname;
      state.picture = action.payload.picture;
      state.isLogin = true;
    },
  },
});

export let saveUser = user.actions.saveUser;

export default configureStore({
  reducer: {
    user: user.reducer, // state 등록
  },
});
