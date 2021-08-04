import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import NavBar from '../../components/NavBar';
import { Container } from './styles';



function HomePage() {
  return (
    <>
      <NavBar />
      <Container>


        <Parallax pages={2} style={{ top: '0', left: '0' }}>
          <ParallaxLayer
            offset={0}
            speed={2.5}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p>Esta é a primeira pagina, rola pra baixo aí maluco</p>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={2}
            style={{ backgroundColor: '#ff6d6d', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <p>Esse é o segundo. pog?</p>
          </ParallaxLayer>

        </Parallax>
      </Container>
    </>
  );
};

export default HomePage;
