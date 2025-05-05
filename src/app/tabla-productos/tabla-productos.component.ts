import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Producto {
  id: number;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
  estado: string;
}

@Component({
  selector: 'app-tabla-productos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tabla-productos.component.html',
  styleUrl: './tabla-productos.component.css',
})
export class TablaProductosComponent {
  filtro: string = '';
  mostrarDialog: boolean = false;
  productoEditado: Producto = this.resetProducto();
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Cemento Ultra',
      categoria: 'Cemento',
      precio: 120.5,
      stock: 50,
      estado: 'A',
    },
    {
      id: 2,
      nombre: 'Ladrillo Rojo',
      categoria: 'Ladrillos',
      precio: 0.8,
      stock: 1000,
      estado: 'A',
    },
    {
      id: 3,
      nombre: 'Arena Gruesa',
      categoria: 'Agregados',
      precio: 30,
      stock: 200,
      estado: 'A',
    },
    {
      id: 4,
      nombre: 'Fierro 1/2"',
      categoria: 'Fierros',
      precio: 12.5,
      stock: 300,
      estado: 'A',
    },
    {
      id: 5,
      nombre: 'Madera Tornillo',
      categoria: 'Madera',
      precio: 45,
      stock: 150,
      estado: 'A',
    },
  ];

  get productosFiltrados(): Producto[] {
    return this.productos.filter((p) =>
      p.nombre.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  eliminar(id: number) {
    this.productos = this.productos.filter((p) => p.id !== id);
  }

  editar(producto: Producto) {
    this.productoEditado = { ...producto };
    this.mostrarDialog = true;
  }

  guardarCambios() {
    const index = this.productos.findIndex(
      (p) => p.id === this.productoEditado.id
    );
    if (index !== -1) this.productos[index] = { ...this.productoEditado };
    this.mostrarDialog = false;
    this.productoEditado = this.resetProducto();
  }

  cancelar() {
    this.mostrarDialog = false;
    this.productoEditado = this.resetProducto();
  }

  private resetProducto(): Producto {
    return {
      id: 0,
      nombre: '',
      categoria: '',
      precio: 0,
      stock: 0,
      estado: '',
    };
  }
}
