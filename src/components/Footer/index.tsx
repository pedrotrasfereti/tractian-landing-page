import React from "react";

/* Assets */
import { Logo, Facebook, Instagram, LinkedIn, YouTube } from "./assets";

/* Styles */
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer id="footer" className={styles.Footer}>
      {/* Top */}
      <div className={styles.Top}>
        {/* Logo */}
        <div className={styles.LogoContainer}>
          <Logo fillColor="#fff" />
        </div>

        {/* Links */}
        <div className={styles.LinksContainer}>
          <div className={styles.Group}>
            <h3 className={styles.GroupTitle}>Product</h3>
            <ul className={styles.LinkList}>
              <li className={styles.Link}>Tractian Sensor</li>
              <li className={styles.Link}>Platform</li>
              <li className={styles.Link}>Features</li>
              <li className={styles.Link}>Plans and prices</li>
            </ul>
          </div>
          <div className={styles.Group}>
            <h3 className={styles.GroupTitle}>Content</h3>
            <ul className={styles.LinkList}>
              <li className={styles.Link}>Guides and Ebooks</li>
              <li className={styles.Link}>Checklists</li>
              <li className={styles.Link}>Intensivão</li>
              <li className={styles.Link}>ROI Calculator</li>
            </ul>
          </div>
          <div className={styles.Group}>
            <h3 className={styles.GroupTitle}>About Tractian</h3>
            <ul className={styles.LinkList}>
              <li className={styles.Link}>Meet Tractian</li>
              <li className={styles.Link}>Success Cases</li>
              <li className={styles.Link}>Press</li>
              <li className={styles.Link}>Careers</li>
              <li className={styles.Link}>Privacy Policy</li>
            </ul>
          </div>
          <div className={styles.Group}>
            <h3 className={styles.GroupTitle}>Contact Us</h3>
            <ul className={styles.LinkList}>
              <li className={styles.Link}>Contact</li>
              <li className={styles.Link}>Refer and Win</li>
              <li className={styles.Link}>Schedule a demo</li>
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className={styles.Social}>
          <ul className={styles.SocialLinks}>
            <li id="linked-in" className={styles.SocialLink}>
              <img src={LinkedIn} alt="LinkedIn Icon" className={styles.Icon} />
            </li>
            <li id="facebook" className={styles.SocialLink}>
              <img src={Facebook} alt="Facebook Icon" className={styles.Icon} />
            </li>
            <li id="instagram" className={styles.SocialLink}>
              <img
                src={Instagram}
                alt="Instagram Icon"
                className={styles.Icon}
              />
            </li>
            <li id="youtube" className={styles.SocialLink}>
              <img src={YouTube} alt="YouTube Icon" className={styles.Icon} />
            </li>
          </ul>
        </div>
      </div>

      {/* Decoration */}
      <hr className={styles.Decoration} />

      {/* Bottom */}
      <div className={styles.Bottom}>
        <span className={styles.Copyright}>
          © Tractian Tecnologia Ltda CNPJ: 35.755.699/0001-84
        </span>

        <span className={styles.Email}>get@tractian.com</span>
      </div>
    </footer>
  );
}

export default Footer;
