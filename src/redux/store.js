import { configureStore } from "@reduxjs/toolkit";
import { adminApi } from "./AdminApi";
import { projectApi } from "./projectApi";

const reduxStore = configureStore({
  reducer: {
    [adminApi.reducerPath]: adminApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
  },
  middleware: (mid) => [...mid(), adminApi.middleware, projectApi.middleware],
});

export default reduxStore;
