import Link from "next/link";
import { Menu } from "antd";
import { useRouter } from "next/router";

const items = [
  { label: <Link href="/">Home</Link>, key: "/" },
  { label: <Link href="/about">About</Link>, key: "/about" },
  {
    label: <Link href="/experiences">Experiences</Link>,
    key: "/experiences",
  },
  {
    label: <Link href="/personal-projects">Projects</Link>,
    key: "/personal-projects",
  },
];

const Header = () => {
  const router = useRouter();
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 style={{ margin: 0 }}>Nawat Ngerncham</h2>
      </div>
      <div className="navbar-right">
        <Menu mode="horizontal" selectedKeys={[router.pathname]} items={items} style={{ minWidth: 0 }} />
      </div>
    </nav>
  );
};

export default Header;
