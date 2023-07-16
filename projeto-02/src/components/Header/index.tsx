import { HeaderContainer } from './styles'
import logoIgnite from '../../assets/Logo-ignite.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <h1>
      <HeaderContainer>
        <img src={logoIgnite} alt="" />
        <nav>
          <NavLink to="/" title="Timer">
            <Timer size={24} />
          </NavLink>
          <NavLink to="/history" title="Historico">
            <Scroll size={24} />
          </NavLink>
        </nav>
      </HeaderContainer>
    </h1>
  )
}
