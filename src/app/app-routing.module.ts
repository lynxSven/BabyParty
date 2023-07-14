import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemContainerComponent } from './item-container/item-container.component';
import { loginGuard } from './login.guard';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: '', component: ItemContainerComponent, canActivate: [loginGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
