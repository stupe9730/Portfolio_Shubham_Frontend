import { configureStore } from "@reduxjs/toolkit";
import { adminApi } from "./AdminApi";
import { ProjectApi } from "./ProjectApi";

const reduxStore = configureStore({
  reducer: {
    [adminApi.reducerPath]: adminApi.reducer,
    [ProjectApi.reducerPath]: ProjectApi.reducer,
  },
  middleware: (mid) => [...mid(), adminApi.middleware, ProjectApi.middleware],
});

export default reduxStore;
