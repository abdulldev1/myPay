import React from "react";
import { Route, Routes } from "react-router-dom";

import Tv from "./components/Payment/PaymentList/PaymentListTop/TV/Tv";
import Main from "./modules/Main/Main";
import { ROUTES } from "./routes";

// function ProtectedRoute({hasUser,children}){
// if(!hasUser){
//  return <Navigate to={ROUTES.AUTH.SIGN_IN} replace />
// }
// else{
//   return children
// }
// }

function App() {
  return (
    <Routes>
      {/* <Route path={ROUTES.MAIN} element={<ProtectedRoute hasUser={true}> <Main /></ProtectedRoute>} exact /> */}
      <Route path={ROUTES.MAIN} element={<Main />} exact />
      <Route path={ROUTES.TV} element={<Tv />} exact />
    </Routes>
  );
}

export default App;
