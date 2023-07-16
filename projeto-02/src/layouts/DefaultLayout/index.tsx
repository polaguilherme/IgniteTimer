import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutConatainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutConatainer>
      <Header />
      <Outlet />
    </LayoutConatainer>
  )
}
