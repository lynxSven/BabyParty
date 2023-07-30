import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodComponent } from './food/food.component';
import { ItemContainerComponent } from './item-container/item-container.component';
import { ItemListComponent } from './item-list/item-list.component';
import { loginGuard } from './login.guard';
import { LoginComponent } from './login/login/login.component';
import { logoutGuard } from './logout.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'main/shopping', pathMatch: 'full'
  },
  {
    path: 'main', component: ItemContainerComponent, canActivate: [loginGuard],
    children: [
      {
        path: 'food', component: FoodComponent
      },
      {
        path: 'shopping', component: ItemListComponent
      }
    ]
  },
  { path: 'login', component: LoginComponent, canActivate: [logoutGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
