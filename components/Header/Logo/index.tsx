import styles from './styles.module.scss';
import Image from 'next/image';
import logoImg from '@/assets/icons/logo.svg';

export default function Logo() {
    return (
        <>
        <Image src={logoImg} width="153" alt="로고이미지"/>
        </>
         
    )
}