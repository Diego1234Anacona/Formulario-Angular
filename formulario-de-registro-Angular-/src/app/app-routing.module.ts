import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { ListadoProductosComponent } from './components/listado-productos/listado-productos.component';
import { LoginComponent } from './components/login/login.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'panelDeControl', loadChildren: () => import('./pages/panel-de-control/panel-de-control.module').then(m => m.PanelDeControlModule)},
  {path: 'login', component: LoginComponent},
  {path: 'register',component: RegisterComponent},
  {path: 'perfil',component: PerfilComponent},
  {path: 'crear-producto',component: CrearProductoComponent},
  {path: 'editProducto/:id',component: CrearProductoComponent},
  {path: 'listado-productos',component: ListadoProductosComponent},
  {path: '**', redirectTo: 'register', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
