import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container } from './styles';


function NavBar() {
  return (
    <Container>
      <nav>

        <div className="cover">
          <a href="">

            lol

          </a>
        </div>

        <div className="links">
          <a href="">
            Contact
          </a>

          <a href="">
            Work
          </a>

          <a href="">
            About
          </a>

        </div>

        <div className="icons">
          <a href="">
            <FaGithub size={30} />
          </a>

          <a href="">
            <FaLinkedin size={30} />
          </a>
        </div>

      </nav>

    </Container>
  );
};

export default NavBar;
