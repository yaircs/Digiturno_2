import Image from 'next/image';
import Link from 'next/link';
import styles from '/app/api/styles/menu.module.css';
import Menu from '../../Components/Menu/Menu';

export default function MenuPrincipal() {
  const menuItems = [
    { url: '/Tramites', label: 'Tramites' },
    { url: '/Caja', label: 'Caja' },
    { url: '/Coactivo', label: 'Coactivo' },
  ];
  return <Menu menuItems={menuItems}></Menu>;
}
