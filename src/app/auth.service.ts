import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public usuarioValido = 'admin';
  public claveValida = '12345';

  public isLoggedIn = false;
  public nombreUsuario = '';

  login(usuario: string, clave: string): boolean {
    if (usuario === this.usuarioValido && clave === this.claveValida) {
      this.isLoggedIn = true;
      this.nombreUsuario = usuario;
      return true;
    } else {
      this.isLoggedIn = false;
      this.nombreUsuario = '';
      return false;
    }
  }

  logout() {
    this.isLoggedIn = false;
    this.nombreUsuario = '';
  }
}
