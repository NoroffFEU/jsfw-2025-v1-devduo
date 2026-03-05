import Header from "./header/Header.tsx";
import Footer from "./footer/Footer.tsx";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
