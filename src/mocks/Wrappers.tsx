import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import store from "../redux/store";

const queryClient = new QueryClient();

const Wrappers: FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  </QueryClientProvider>
);

export default Wrappers;
