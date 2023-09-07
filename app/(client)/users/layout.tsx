import Sidebar from "../components/Sidebar/Sidebar";
import UserList from "../components/User/UserList";
import getUsers from "../../(server)/actions/getUsers";

type UsersLayoutProps = {
  children: React.ReactNode;
};

export default async function UsersLayout({ children }: UsersLayoutProps) {
  const users = await getUsers();

  return (
    <Sidebar>
      <div>
        {users ? <UserList users={users} /> : <></>}
        {children}{" "}
      </div>
    </Sidebar>
  );
}
