import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminPri = () => {
  const userToken = useSelector((state: any) => state.user.token);

  return <>{!userToken ? <Navigate to="/login" /> : <Outlet />}</>;
};

export default AdminPri;
