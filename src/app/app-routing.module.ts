import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { DetailsComponent } from './components/details/details.component';
import { NotfoundComponent } from './components/notfound/notfound.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', 
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: IndexComponent
  },
  {
    path: 'search/:game-search',
    component: IndexComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  { 
    path: '**', 
    redirectTo: '/404'
  },
  { 
    path: '404', 
    component: NotfoundComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
