import { currUser } from "@/modules/authentication/actions";
import UserButton from "@/modules/authentication/components/user-button";
// import Image from "next/image";
export default async function Home() {
  const user = await currUser();
  return (
    <div className="bg-black w-full h-screen text-white flex justify-center items-center">
      <UserButton user={user} />
    </div>
  );
}
