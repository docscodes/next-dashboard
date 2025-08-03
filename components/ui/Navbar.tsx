import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

const Navbar = () => {
  return (
    <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
      <Link href="/">
        <Image src={logo} alt="Logo" width={50} height={50} />
      </Link>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png?size=50" alt="@shadcn" />
        <AvatarFallback>BT</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Navbar;
