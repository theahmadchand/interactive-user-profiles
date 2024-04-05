import {
  QueryClient,
  QueryClientProvider as TanStackQueryClientProvider,
} from "@tanstack/react-query";

export const QueryClientProvider: FCC = (props) => {
  const { children } = props;
  const queryClient = new QueryClient();

  return (
    <TanStackQueryClientProvider client={queryClient}>
      {children}
    </TanStackQueryClientProvider>
  );
};
