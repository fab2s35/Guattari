import HeaderPrivate from '../components/HeaderPrivate/Header';
import FooterPrivate from '../components/FooterPrivate/Footer';
import { Outlet } from 'react-router-dom';

export default function PrivateLayout() {
  return (
    <>
      <HeaderPrivate />
      <Outlet />
      <FooterPrivate />
    </>
  );
}
