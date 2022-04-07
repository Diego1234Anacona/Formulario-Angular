import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //Agregar a firebase
  constructor(private firestore: AngularFirestore) { }

  agregarProducto(producto: any): Promise<any> {
    return this.firestore.collection('productos').add(producto);
  }
  getProductos(): Observable<any> {
    return this.firestore.collection('productos',ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }
  //Boton eliminar
  eliminarProducto(id: string): Promise<any> {
    return this.firestore.collection('productos').doc(id).delete();
  }
  // Boton Editar
    getProducto(id: string): Observable<any> {
      return this.firestore.collection('productos').doc(id).snapshotChanges();
    }
        actualizarProducto(id: string, data:any): Promise<any>{
          return this.firestore.collection('productos').doc(id).update(data);
        }
}
