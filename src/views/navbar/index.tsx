import { useLocation } from "react-router-dom";
import { Nav, NavItem } from "../../components/Navbar";
import { ROUTES } from "../../constants";

export default function Navbar() {
  const location = useLocation();
  return (
    <Nav>
      <NavItem
        text="Home"
        to={ROUTES.HOME}
        current={location.pathname === ROUTES.HOME}
      />
      <NavItem
        text="Chart"
        to={ROUTES.CHART}
        current={location.pathname === ROUTES.CHART}
      />
      <NavItem
        text="Transactions"
        to={ROUTES.TRANSACTIONS}
        current={location.pathname === ROUTES.TRANSACTIONS}
      />
    </Nav>
  );
}
