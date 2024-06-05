import styled from 'styled-components';
import Logo from './Logo';
import GuestNav from './GuestNav';
// import Uploader from '../data/Uploader';

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <GuestNav />
      {/* <Uploader /> */}
    </StyledSidebar>
  );
}

export default Sidebar;