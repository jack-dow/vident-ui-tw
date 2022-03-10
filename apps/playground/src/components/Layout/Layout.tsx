import { Navbar } from './Navbar';

interface LayoutProps {
  children?: React.ReactElement;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-full">
      <Navbar />
      {children}
    </div>
  );
};
