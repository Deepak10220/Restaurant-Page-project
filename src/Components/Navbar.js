import "./Navbar.css";
import { Button } from "./Button.js";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navlogo">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt=""
            srcset=""
          />
          <span>GeekFoods</span>
        </div>
        <div className="menu">
          <li>Home</li>
          <li>Quote</li>
          <li>Restaurant</li>
          <li>Foods</li>
          <li>Contact</li>
        </div>

        <div>
          <Button
            borderRadius="5px"
            padding="10px"
            fontSize="15px"
            backgroundColor={"#2563EB"}
            fontColor={"#FFFFFF"}
          >
            Get Started
          </Button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
