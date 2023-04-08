import React, { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AdminLayout from "./Layout/index";

const ErrorPage = React.lazy(() => import("../../common/Errors"));
const Analaytics = React.lazy(() =>
  import("./components/analaytics")
);
const UserManagment = React.lazy(() =>
  import("./components/usermanagment")
);
const DistributersList = React.lazy(() =>
  import("./components/DistributersList")
);
const Settings = React.lazy(() =>
  import("./components/settings")
);
const PostMangment = React.lazy(() => import("./components/postmangment"));
function UserRoutes() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (pathname === "/dashboard") {
      navigate("/dashboard/usermanagment");
    }
  }, [navigate, pathname]);
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route path="/usermanagment" element={<UserManagment />} />
        <Route path="/postmanagment" element={<PostMangment />} />
        <Route path="/notice" element={<DistributersList />} />
        <Route path="/analytics" element={<Analaytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default UserRoutes;
