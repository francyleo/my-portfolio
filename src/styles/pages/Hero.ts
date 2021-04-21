import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;
  padding: 200px 20% 0;

  background: ${props => props.theme.primary};
`;

export const Subtitle = styled.h3`
  text-transform: uppercase;
  color: ${props => props.theme.secondary};
  font-size: ${props => props.theme.text.size.sm};
  font-weight: ${props => props.theme.text.weight.bold};
`;

export const Title = styled.h1`
  font-family: Poppins, sans-serif;
  font-weight: ${props => props.theme.text.weight.bold};
  font-size: ${props => props.theme.text.size.lg};
  margin-top: 4px;
`;

export const Description = styled.p`
  margin-top: 10px;
  font-size: ${props => props.theme.text.size.sm};
  font-weight: ${props => props.theme.text.weight.regular};
`;

export const Social = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 50px;

  a {
    color: #fff;
    transition: 200ms;

    &:hover {
      transform: scale(1.1);

      &:nth-child(1) {
        color: ${props => props.theme.linkedin};
      }

      &:nth-child(2) {
        color: ${props => props.theme.github};
      }

      &:nth-child(3) {
        color: ${props => props.theme.instagram};
      }

      &:nth-child(4) {
        color: ${props => props.theme.google};
      }
    }

    & + a {
      margin-top: 20px;
    }
  }
`;

export const HeroWrapper = styled.div`
  svg {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
  }
`;

export const LineWrapper = styled.div`
  svg {
    position: absolute;
    left: 10%;
    bottom: 0;
    height: 80%;
  }
`;
