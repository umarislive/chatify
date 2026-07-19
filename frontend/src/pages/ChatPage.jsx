import { useAuthStore } from "../store/useAuthStore";

const ChatPage = () => {
  const { logout } = useAuthStore();

  return (
    <div className="z-10">
      <button onClick={logout} className="btn btn-lg cursor-pointer">Logout</button>
    </div>
  );
};

export default ChatPage;
