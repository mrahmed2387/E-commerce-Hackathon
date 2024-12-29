import React from "react";

const Footer: React.FC = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    footer: {
      backgroundColor: "#f8f8f8",
      padding: "40px 20px",
      fontFamily: "Arial, sans-serif",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    brand: {
      flex: "1 1 200px",
      marginBottom: "20px",
    },
    brandName: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    address: {
      fontStyle: "normal",
      lineHeight: "1.6",
      color: "#666",
      fontSize: "14px",
    },
    section: {
      flex: "1 1 200px",
      margin: "10px",
    },
    sectionHeading: {
      fontSize: "16px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    list: {
      listStyle: "none",
      padding: "0",
      margin: "0",
    },
    listItem: {
      fontSize: "14px",
      color: "#000",
      marginBottom: "5px",
      fontWeight: "normal",
    },
    form: {
      display: "flex",
      alignItems: "center",
    },
    emailInput: {
      flex: 1,
      padding: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      fontSize: "14px",
      marginRight: "10px",
    },
    subscribeButton: {
      padding: "10px 20px",
      backgroundColor: "#000",
      color: "#fff",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "bold",
    },
    footerBottom: {
      textAlign: "center",
      marginTop: "20px",
      fontSize: "12px",
      color: "#666",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Brand and Address */}
        <div style={styles.brand}>
          <h1 style={styles.brandName}>Funiro.</h1>
          <address style={styles.address}>
            400 University Drive Suite 200<br />
            Coral Gables, FL 33134 USA
          </address>
        </div>

        {/* Links */}
        <div style={styles.section}>
          <h3 style={styles.sectionHeading}>Links</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Home</li>
            <li style={styles.listItem}>Shop</li>
            <li style={styles.listItem}>About</li>
            <li style={styles.listItem}>Contact</li>
          </ul>
        </div>

        {/* Help */}
        <div style={styles.section}>
          <h3 style={styles.sectionHeading}>Help</h3>
          <ul style={styles.list}>
            <li style={styles.listItem}>Payment Options</li>
            <li style={styles.listItem}>Returns</li>
            <li style={styles.listItem}>Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div style={styles.section}>
          <h3 style={styles.sectionHeading}>Newsletter</h3>
          <form style={styles.form}>
            <input
              type="email"
              placeholder="Enter Your Email Address"
              required
              style={styles.emailInput}
            />
            <button type="submit" style={styles.subscribeButton}>
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p>2023 Funiro. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

