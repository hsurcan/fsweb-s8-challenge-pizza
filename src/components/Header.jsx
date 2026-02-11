import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #ce2829;
  padding: 3rem 1rem;
  text-align: center;
`;

const Nav = styled.nav`
  color: white;
  margin-top: 1rem;
  font-size: 0.9rem;
  span {
    opacity: 0.8;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title><img src="/images/logo.png" alt="Logo"/></Title>
      <Nav>
        <span>Anasayfa - Seçenekler - </span> <strong>Sipariş Oluştur</strong>
      </Nav>
    </HeaderContainer>
  );
}