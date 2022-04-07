import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  crearProducto: FormGroup;
  submitted = false;
  id: string | null;

  //titulo del html
  titulo = 'Editar Producto';

  constructor(private fb: FormBuilder,
              private _productoService: ProductoService,
              private router: Router,
              private aRoute: ActivatedRoute) {
    this.crearProducto = this.fb.group({
      nombre: ['', Validators.required],
      caracteristicas: ['', Validators.required],
      fecha: ['', Validators.required],
      correo: ['', Validators.required],
      pais: ['', Validators.required],
      precio: ['', Validators.required],
      unidadesD: ['', Validators.required],
      unidadesV: ['', Validators.required],
    })

    this.id = this.aRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  ngOnInit(): void {
    this.esEditar();
  }
  agregarEditarProducto() {
    this.submitted = true;

    if (this.crearProducto.invalid){
      return;
    }
    if(this.id === null) {
      this.agregarProducto
    } else {
      this.editarProducto(this.id);
    }

  }
    agregarProducto() {
      const producto: any = {
        nombre: this.crearProducto.value.nombre,
        caracteristicas: this.crearProducto.value.caracteristicas,
        fecha: this.crearProducto.value.fecha,
        correo: this.crearProducto.value.correo,
        pais: this.crearProducto.value.pais,
        precio: this.crearProducto.value.precio,
        unidadesD: this.crearProducto.value.unidadesD,
        unidadesV: this.crearProducto.value.unidadesV,
        fechaCreacion: new Date(),
        fechaActualizacion: new Date(),

      }

      this._productoService.agregarProducto(producto).then(() => {

        this.router.navigate(['/listado-productos']);
      }).catch(error => {
        console.log(error)

      })
    }

    editarProducto(id: string) {

      const producto: any = {
        nombre: this.crearProducto.value.nombre,
        caracteristicas: this.crearProducto.value.caracteristicas,
        fecha: this.crearProducto.value.fecha,
        correo: this.crearProducto.value.correo,
        pais: this.crearProducto.value.pais,
        precio: this.crearProducto.value.precio,
        unidadesD: this.crearProducto.value.unidadesD,
        unidadesV: this.crearProducto.value.unidadesV,
        fechaActualizacion: new Date()

      }


      this._productoService.actualizarProducto(id, producto).then(() => {
        this.router.navigate(['/listado-productos']);
      })

    }


  //Boton editar producto
  esEditar() {
    this.titulo = 'Editar Producto'
    if (this.id !== null) {
      this._productoService.getProducto(this.id).subscribe(data => {

        this.crearProducto.setValue({
          nombre: data.payload.data()['nombre'],
          caracteristicas: data.payload.data()['caracteristicas'],
          fecha: data.payload.data()['fecha'],
          correo: data.payload.data()['correo'],
          pais: data.payload.data()['pais'],
          precio: data.payload.data()['precio'],
          unidadesD: data.payload.data()['unidadesD'],
          unidadesV: data.payload.data()['unidadesV'],
        })
      })
    }
  }

}
