import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { PrincipalComponent } from './principal/principal.component';
import { RouterOutlet } from '@angular/router';
import { TablaProductosComponent } from './tabla-productos/tabla-productos.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    FormsModule,
    RouterOutlet,
    CabeceraComponent,
    PiepaginaComponent,
    PrincipalComponent,
    TablaProductosComponent,
  ],
  standalone: true,
})
export class AppComponent {
  title = 'ConstruMarket';
  usuarioInput = '';
  claveInput = '';
  mensaje = '';

  constructor(public authService: AuthService) {}

  login() {
    if (this.authService.login(this.usuarioInput, this.claveInput)) {
      this.mensaje = 'Login exitoso';
    } else {
      this.mensaje = 'Error en las credenciales';
    }
  }

  logout() {
    this.authService.logout();
    this.mensaje = 'Sesión cerrada';
  }
}
