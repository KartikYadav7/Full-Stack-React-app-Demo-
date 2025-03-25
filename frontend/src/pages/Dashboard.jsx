
import { useContext } from "react";
import AuthContext from "../../context/AuthContext"

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className=" p-4 text-white">
      <div className="w-screen flex justify-around">
        <h2 className="text-2xl">Welcome,{user?.userName}</h2>
       
        <button onClick={logout} className="px-4 py-2 bg-red-500">Logout</button>
      </div>

    </div>
  );
};

export default Dashboard;
