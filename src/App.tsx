import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import Landing from "./pages/landing/Landing";
import store from "./redux/store";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Landing} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
