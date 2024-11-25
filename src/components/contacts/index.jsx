import { MdOutlineMailLock, MdOutlineMyLocation } from "react-icons/md";
import design from "./contact.module.css";
import { FiPhone } from "react-icons/fi";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaReact } from "react-icons/fa";
import { FaX } from "react-icons/fa6";

export const Contacts = () => {
  return (
    <div className={design.container}>
      <section className={design.header}>
        <p>Contact</p>
      </section>

      <section className={design.contactDetails}>
        <div className={design.contact}>
          <div>
            <MdOutlineMyLocation />
          </div>
          <div>
            <p>Address</p>
            <p>Enugu, Nigeria</p>
          </div>
        </div>

        <div className={design.contact}>
          <div>
            <FiPhone />
          </div>
          <div>
            <p>Contact Number</p>
            <p>+2348060492441</p>
          </div>
        </div>

        <div className={design.contact}>
          <div>
            <MdOutlineMailLock />
          </div>
          <div>
            <p>Email Address</p>
            <p>chiedozieezenwa <br /> @gmail.com</p>
          </div>
        </div>

        <div className={design.contact}>
          <div>
            <FaReact />
          </div>
          <div>
            <p>Website</p>
            <p>https://chiedozie-three.vercel.app/</p>
          </div>
        </div>
      
      </section>

      <section className={design.smIcons}>
        <a href="" target="_blank"><FaGithub className={design.icons}/></a>
        <a href="https://www.linkedin.com/in/chiedozieezenwa" target="_blank"><FaLinkedin className={design.icons}/></a>
        <a href="https://www.instagram.com/doziee1/" target="_blank"><FaInstagram className={design.icons}/></a>
        <a href="https://www.facebook.com/ezenwa.chiedozie/" target="_blank"><FaFacebook className={design.icons}/></a>
        <a href="https://www.x.com/doziee1" target="_blank"><FaX className={design.icons}/></a>
      </section>
    </div>
  );
};
