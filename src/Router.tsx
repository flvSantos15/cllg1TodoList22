import { Route, Routes } from "react-router";

import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}
