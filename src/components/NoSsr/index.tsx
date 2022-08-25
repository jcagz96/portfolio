import dynamic from 'next/dynamic'
import { ReactNode } from 'react';
type Props = {
  children: ReactNode;
};

const NoSsr = ({ children }: Props) => <>{children}</>

export default dynamic(() => Promise.resolve(NoSsr), { ssr: false });