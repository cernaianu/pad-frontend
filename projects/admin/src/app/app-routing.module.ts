import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./public/login/login.component";
import {SecureComponent} from "./secure/secure.component";
import {RegisterComponent} from "./public/register/register.component";
import {PublicComponent} from "./public/public.component";
import {DashboardComponent} from "./secure/dashboard/dashboard.component";
import {UsersComponent} from "./secure/users/users.component";
import {ProfileComponent} from "./secure/profile/profile.component";
import {UserCreateComponent} from "./secure/users/user-create/user-create.component";
import {UserEditComponent} from "./secure/users/user-edit/user-edit.component";
import {RolesComponent} from "./secure/roles/roles.component";
import {RoleCreateComponent} from "./secure/roles/role-create/role-create.component";
import {RoleEditComponent} from "./secure/roles/role-edit/role-edit.component";
import {ProductsComponent} from "./secure/products/products.component";
import {ProductCreateComponent} from "./secure/products/product-create/product-create.component";
import {ProductEditComponent} from "./secure/products/product-edit/product-edit.component";
import {OrdersComponent} from "./secure/orders/orders.component";
import {OrderViewComponent} from "./secure/orders/order-view/order-view.component";
import {Permission} from "./classes/permission";


const routes: Routes = [
  {
    path: '',
    component: SecureComponent,
    children: [
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'profile', component: ProfileComponent},
      {
        path: 'users',
        component: UsersComponent,
        canActivate: [Permission],
        data: {permissions: ['view_users', 'edit_users']}
      },
      {path: 'users/create', component: UserCreateComponent},
      {path: 'users/:id/edit', component: UserEditComponent},
      {
        path: 'roles',
        component: RolesComponent,
        canActivate: [Permission],
        data: {permissions: ['view_roles', 'edit_roles']}
      },
      {path: 'roles/create', component: RoleCreateComponent},
      {path: 'roles/:id/edit', component: RoleEditComponent},
      {
        path: 'products',
        component: ProductsComponent,
        canActivate: [Permission],
        data: {permissions: ['view_products', 'edit_products']}
      },
      {path: 'products/create', component: ProductCreateComponent},
      {path: 'products/:id/edit', component: ProductEditComponent},
      {
        path: 'orders',
        component: OrdersComponent,
        canActivate: [Permission],
        data: {permissions: ['view_orders', 'edit_orders']}
      },
      {path: 'orders/:id', component: OrderViewComponent},
    ]
  },
  {
    path: '',
    component: PublicComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
