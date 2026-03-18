import Header from "./header/Header.tsx";
import Footer from "./footer/Footer.tsx";
import styles from "./Layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layoutGrid}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
