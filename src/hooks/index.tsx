import React, { PropsWithChildren } from 'react';
import { ThemeProviderCustom } from './theme';

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => (
  <ThemeProviderCustom>{children}</ThemeProviderCustom>
);

export default AppProvider;