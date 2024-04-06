import { QueryClient, QueryClientProvider as TanStackQueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const QueryClientProvider: FCC = (props) => {
    const { children } = props;
    const queryClient = new QueryClient();

    return (
        <TanStackQueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </TanStackQueryClientProvider>
    );
};
