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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt, faList, faGavel, faUser, faSignOutAlt, faHandHoldingUsd, faShoppingCart, faClipboard } from '@fortawesome/free-solid-svg-icons';
import {logout} from "../utils/auth";

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
        this.handleLogout = this.handleLogout.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    handleLogout(){
        logout();
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
                        { this.props.loggedIn ? '' :
                        <NavItem>
                            <NavLink className={this.props.page==="registration" ? "active" : ""} href="/registration"  >
                                <FontAwesomeIcon icon={faList} width="16" /> Kayıt
                            </NavLink>
                        </NavItem>
                        }
                        { this.props.loggedIn ? '' :
                        <NavItem>
                            <NavLink className={this.props.page==="login" ? "active" : ""} href="/login"><FontAwesomeIcon icon={faSignInAlt} width="16" /> Giriş</NavLink>
                        </NavItem>
                        }
                        { this.props.loggedIn ?
                            <NavItem>
                                <NavLink className={this.props.page==="sell" ? "active" : ""} href="/sell"><FontAwesomeIcon icon={faClipboard} width="16" /> Satış Başlat</NavLink>
                            </NavItem> : ''
                        }
                        <NavItem style={{marginLeft:'10px'}}>
                            <Input
                                type="search"
                                name="search"
                                id="exampleSearch"
                                placeholder="arama yapın..."
                            />
                        </NavItem>
                        { this.props.loggedIn ?
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle className={this.props.page === "me" ? "active" : ""} nav caret>
                                <FontAwesomeIcon icon={faUser} width="16" /> {this.props.user.nameSurname ? this.props.user.nameSurname : ''}
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/sales">
                                    <FontAwesomeIcon icon={faHandHoldingUsd} width="16" /> Satılanlar
                                </DropdownItem>
                                <DropdownItem href="/purchases">
                                    <FontAwesomeIcon icon={faShoppingCart} width="16" /> Alınanlar
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={this.handleLogout}>
                                    <FontAwesomeIcon icon={faSignOutAlt} width="16" /> Çıkış Yap
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown> : ''
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;