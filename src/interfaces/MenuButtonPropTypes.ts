export default interface MenuButtonPropTypes {
  menuActive: boolean /* alternate between ☰ and X shapes */;
  headerChange: boolean;
  toggleMenu: () => void;
}
