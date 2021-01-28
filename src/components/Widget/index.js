
import styled from 'styled-components';

export const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({theme}) => theme.colors.primary};
  background-color: ${({theme}) => theme.colors.mainBg};
  overflow: hidden;

  @import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Potta+One&family=Shadows+Into+Light&display=swap');

  h2 {
    font-family: 'Potta One', cursive;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    color: #000;
    margin-top: 0;
    margin-bottom: 0;
  }

    h1, h3 {
    font-family: 'Potta One', cursive;
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    color: #fff;
    margin-top: 0;
    margin-bottom: 0;
  }

  p {
    font-family: 'Shadows Into Light', cursive;
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
    color: #000;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({theme}) => theme.colors.primary};
`

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  
  &:hover,
  &:focus {
    opacity: .5;
  }
`;


export default Widget;