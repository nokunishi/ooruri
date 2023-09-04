import Sidebar from "../(client)/components/Sidebar/Sidebar";
import UserList from "../(client)/components/User/UserList";
import getUsers from "../actions/getUsers";

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
