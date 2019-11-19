import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Form,
    FormGroup,
    Label,
    Input,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faSignInAlt, faList, faGavel, faUser, faSignOutAlt, faHandHoldingUsd, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar color="light" light expand="md" style={{boxShadow: '0px 10px 5px 0px #eee', minHeight:'70px'}}>
                <NavbarBrand href="/"><FontAwesomeIcon icon={faGavel} width="16" /> Açık Arttırma</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className={this.props.page==="home" ? "active" : ""} href="/">
                                <FontAwesomeIcon icon={faHome} width="16" /> Anasayfa
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={this.props.page==="registration" ? "active" : ""} href="/registration"  >
                                <FontAwesomeIcon icon={faList} width="16" /> Kayıt
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className={this.props.page==="login" ? "active" : ""} href="/login"><FontAwesomeIcon icon={faSignInAlt} width="16" /> Giriş</NavLink>
                        </NavItem>
                        <NavItem style={{marginLeft:'10px'}}>
                            <Input
                                type="search"
                                name="search"
                                id="exampleSearch"
                                placeholder="arama yapın..."
                            />
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <FontAwesomeIcon icon={faUser} width="16" /> Mert Eroğlu
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/sales">
                                    <FontAwesomeIcon icon={faHandHoldingUsd} width="16" /> Satılanlar
                                </DropdownItem>
                                <DropdownItem href="/purchases">
                                    <FontAwesomeIcon icon={faShoppingCart} width="16" /> Alınanlar
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <FontAwesomeIcon icon={faSignOutAlt} width="16" /> Çıkış Yap
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;