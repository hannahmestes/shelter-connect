import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './pages/list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'user-selection', loadChildren: './pages/user-selection/user-selection.module#UserSelectionPageModule' },
  { path: 'signup', loadChildren: './pages/adopter/signup/signup.module#SignupPageModule' },
  { path: 'filter', loadChildren: './pages/adopter/filter/filter.module#FilterPageModule' },
  { path: 'browsing', loadChildren: './pages/adopter/browsing/browsing.module#BrowsingPageModule' },
  { path: 'likes', loadChildren: './pages/adopter/likes/likes.module#LikesPageModule' },
  { path: 'signup', loadChildren: './pages/shelter/signup/signup.module#SignupPageModule' },
  { path: 'registration', loadChildren: './pages/shelter/registration/registration.module#RegistrationPageModule' },
  { path: 'add-animal', loadChildren: './pages/shelter/add-animal/add-animal.module#AddAnimalPageModule' },
  { path: 'edit-animal', loadChildren: './pages/shelter/edit-animal/edit-animal.module#EditAnimalPageModule' },
  { path: 'manage-animals', loadChildren: './pages/shelter/manage-animals/manage-animals.module#ManageAnimalsPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
