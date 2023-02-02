import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurd } from './auth-gaurd.service';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditUserComponent } from './user-list/edit-user/edit-user.component';
import { UserListComponent } from './user-list/user-list.component';

// import { UserUpdateComponent } from './user-list/user-update/user-update.component';

const routes: Routes = [
  { path:"",  component:AuthComponent},
  { path:"home",canActivate:[AuthGaurd], component: HomeComponent},

  { path:'login',component:AuthComponent},
  { path:'userList', component:UserListComponent},
  { path:'edituser',canActivate:[AuthGaurd], component:EditUserComponent},
  { path:'edituser/:id',component: EditUserComponent },
  { path:'userlisted', component:UserListComponent},
  { path: '**', redirectTo:"",pathMatch: 'full' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
