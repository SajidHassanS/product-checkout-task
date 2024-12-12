"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PropTypes from "prop-types";

const queryClient = new QueryClient();

const QueryProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      {children}
    </QueryClientProvider>
  );
};

QueryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QueryProvider;
