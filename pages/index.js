import { useSession } from "next-auth/react";
import Feed from "../components/Feed";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const { data: session } = useSession();

  if (!session) return <Login />;

  return (
    <main className="relative max-w-[1400px] mx-auto">
      <Sidebar />
      <div className="flex gap-6">
        <Feed />
      </div>
    </main>
  );
}
