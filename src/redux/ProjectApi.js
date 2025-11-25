import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ProjectApi = createApi({
  reducerPath: "ProjectApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/project`,
    credentials: "include",
  }),
  // baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5000/api/project` }),
  tagTypes: ["project"],
  endpoints: (builder) => {
    return {
      addProject: builder.mutation({
        query: (userData) => {
          return {
            url: "/add-Project",
            method: "POST",
            body: userData,
          };
        },
        // transformErrorResponse: (err) => err,
        invalidatesTags: ["project"],
      }),
      getProject: builder.query({
        query: (userData) => {
          return {
            url: "/get-Project",
            method: "GET",
          };
        },
        transformResponse: (data) => data.result,
        providesTags: ["project"],
      }),
      deleteProject: builder.mutation({
        query: (item) => {
          return {
            url: `/delete-Project/${item._id}`,
            method: "DELETE",
          };
        },
        transformResponse: (data) => data.result,
        invalidatesTags: ["project"],
      }),
    };
  },
});

export const {
  useGetProjectQuery,
  useAddProjectMutation,
  useDeleteProjectMutation,
} = ProjectApi;
