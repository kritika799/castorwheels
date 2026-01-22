import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <h1>Privacy Policy</h1>
      <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to <strong>Castors Global</strong>. We respect your privacy and
          are committed to protecting your personal information. This Privacy
          Policy explains how we collect, use, and safeguard your data when you
          visit our website.
        </p>
      </section>

      <section>
        <h2>2. Information We Collect</h2>
        <ul>
          <li>Personal details such as name, email address, phone number</li>
          <li>Business inquiries and contact form submissions</li>
          <li>Technical data like IP address, browser type, and device info</li>
        </ul>
      </section>

      <section>
        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To respond to inquiries and provide customer support</li>
          <li>To improve our products and website performance</li>
          <li>To communicate updates, offers, or service-related messages</li>
        </ul>
      </section>

      <section>
        <h2>4. Data Protection</h2>
        <p>
          We implement appropriate security measures to protect your personal
          data from unauthorized access, disclosure, or misuse.
        </p>
      </section>

      <section>
        <h2>5. Cookies</h2>
        <p>
          Our website may use cookies to enhance user experience and analyze
          website traffic. You can choose to disable cookies through your
          browser settings.
        </p>
      </section>

      <section>
        <h2>6. Third-Party Services</h2>
        <p>
          We do not sell or trade your personal information. However, we may
          share data with trusted third-party service providers for business
          operations.
        </p>
      </section>

      <section>
        <h2>7. Your Rights</h2>
        <p>
          You have the right to access, update, or request deletion of your
          personal information by contacting us.
        </p>
      </section>

      <section>
        <h2>8. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at:
        </p>
        <p>
          <strong>Email:</strong> info@castorsglobal.com
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "900px",
    margin: "40px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  },
};

export default PrivacyPolicy;
