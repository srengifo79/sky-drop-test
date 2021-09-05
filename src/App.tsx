import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Landing from "./pages/landing/Landing";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
