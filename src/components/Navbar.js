import Link from "next/link.js";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Navbar;
