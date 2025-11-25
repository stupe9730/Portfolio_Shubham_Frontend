import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "adminApi",
  // baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BACKEND_URL}/api/admin`, credentials: "include" }),
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:5000/api/admin` }),
  tagTypes: ["email"],
  endpoints: (builder) => {
    return {
      sendMail: builder.mutation({
        query: (userData) => {
          console.log(userData);
          return {
            url: "/send-email",
            method: "POST",
            body: userData,
          };
        },
        providesTags: ["email"],
      }),
      getEmail: builder.query({
        query: () => {
          return {
            url: "/get-email",
            method: "GET",
            // body: userData
          };
        },
        transformResponse: (data) => data.result,
        providesTags: ["email"],
      }),
      deleteEmail: builder.mutation({
        query: (id) => {
          return {
            url: `/delete-email/${id}`,
            method: "DELETE",
            // body: userData
          };
        },
        transformResponse: (data) => data.result,
        invalidatesTags: ["email"],
      }),
    };
  },
});

export const { useSendMailMutation, useGetEmailQuery, useDeleteEmailMutation } =
  adminApi;
