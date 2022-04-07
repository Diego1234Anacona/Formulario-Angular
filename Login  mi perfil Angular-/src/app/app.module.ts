import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';


import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,

    ListadoProductosComponent,
    CrearProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,

    // firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
