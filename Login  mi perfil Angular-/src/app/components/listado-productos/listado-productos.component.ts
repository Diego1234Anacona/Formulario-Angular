import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {
  productos: any[] = [];
  pagina: number = 1;

  constructor(private _productoService: ProductoService) {

  }

  ngOnInit(): void {
    this.getProductos()
  }
  getProductos() {
  this._productoService.getProductos().subscribe(data => {
    this.productos = [];
   data.forEach((element:any) => {

    this.productos.push({
      id:element.payload.doc.id,
      ...element.payload.doc.data(),
    })
   });
   console.log(this.productos)
  });


}
eliminarProducto(id:string) {
  this._productoService.eliminarProducto(id).then(() => {

      console.log('Producto eliminado');
  }).catch((err) => {
console.log(err)
  });
}

}
