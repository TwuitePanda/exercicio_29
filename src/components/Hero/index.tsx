// Hero.tsx
import styled from 'styled-components';

const Hero = styled.div`
  background-image: url('hero.jpg');
  background-size: cover;
  padding: 50px;
  text-align: center;
  color: white;
`;

const HeroComponent = () => {
  return (
    <Hero>
      {/* conteúdo do hero */}
    </Hero>
  );
};

export default HeroComponent;
