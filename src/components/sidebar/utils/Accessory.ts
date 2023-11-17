import { logout } from "../../../authentication/AuthService"

export const logoff = () => {
  logout();
  window.location.reload();
}