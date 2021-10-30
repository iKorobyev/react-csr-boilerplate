import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const testAPI = createApi({
  reducerPath: "testAPI", // Уникальное название reducer
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com", // Сюда записываем API к которой будем обращаться
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query({
      // query Дженериком прокидывается тип возвращаймой data
      query: () => ({
        url: "/users", // Формируем некоторые endpoints(Суммируются с основной URL)
        // params: {
        //   _limit: limit, // Те параметры, которые указываем после "?" в URL
        // },
      }),
    }),
  }),
});
