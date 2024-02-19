import { Outlet } from 'react-router-dom';
import { Header } from '../../pages/components/Header';
import { HomeContainer } from './styles';

export function DefaultLayout() {
    return (
        <>
            <Header />
            <HomeContainer>
                <Outlet />
            </HomeContainer>
        </>
    );
}