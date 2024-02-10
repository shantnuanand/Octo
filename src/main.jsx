import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            staleTime:10000,
        },
    },
})


ReactDOM.createRoot(document.getElementById("root")).render(

    <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />

    </QueryClientProvider>
);
