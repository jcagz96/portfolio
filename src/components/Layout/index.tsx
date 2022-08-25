import Header from "../Header";
import { ReactNode, FC } from 'react';
import { Main } from './styles';
import NoSsr from "../NoSsr";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <NoSsr>
        <Header />
      </NoSsr>
      <Main>
        {children}
      </Main>
    </>
  )
}

export default Layout;