import {FaFacebook, FaInstagram} from "react-icons/fa";
import JugsieBottlesLogo from "../../public/Logos/logo";

const Footer = () => {
  return (
    <footer className="bg-white p-10 footer text-base-content">
      <div>
        <JugsieBottlesLogo/>
        <p className="font-extrabold font-mono self-center">
          Jugsie Bottles
        </p>
        <span
          className="font-normal font-mono tracking-tight">Quenching your thirst since 2020</span>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div className="grid grid-cols-2 grid-rows-2">
        <span className="footer-title col-span-2">Social</span>
        <a className=""><FaInstagram/></a>
        <a className=""><FaFacebook/></a>
      </div>
    </footer>
  )
}

export default Footer;