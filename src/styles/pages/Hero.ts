import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding: 200px 20% 0;

  background: ${props => props.theme.primary};
`;

export const Subtitle = styled.h3`
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => props.theme.secondary};
  font-size: ${props => props.theme.text.size.sm};
`;

export const Title = styled.h1`
  font-family: Poppins, sans-serif;
  font-weight: ${props => props.theme.text.weight.bold};
  font-size: ${props => props.theme.text.size.lg};
  margin-top: 4px;
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: ${props => props.theme.text.size.xs};
`;

export const HeroImg = styled.img``;

export const LineImg = styled.img``;
