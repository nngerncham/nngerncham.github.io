import Link from "next/link";
import { Menu, Drawer, Button } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";

const items = [
  { label: <Link href="/">Home</Link>, key: "/" },
  { label: <Link href="/about">About</Link>, key: "/about" },
  { label: <Link href="/experiences">Experiences</Link>, key: "/experiences" },
  { label: <Link href="/personal-projects">Projects</Link>, key: "/personal-projects" },
];

const Header = () => {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 style={{ margin: 0 }}>Nawat Ngerncham</h2>
      </div>
      <div className="navbar-right">
        <div className="navbar-landscape-menu">
          <Menu mode="horizontal" selectedKeys={[router.pathname]} items={items} />
        </div>
        <div className="navbar-portrait-menu">
          <Button type="text" className="navbar-hamburger" onClick={() => setDrawerOpen(true)}>
            ☰
          </Button>
          <Drawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            placement="right"
            title="Navigation"
            width={220}
          >
            <Menu
              mode="inline"
              selectedKeys={[router.pathname]}
              items={items}
              onClick={() => setDrawerOpen(false)}
            />
          </Drawer>
        </div>
      </div>
    </nav>
  );
};

export default Header;
