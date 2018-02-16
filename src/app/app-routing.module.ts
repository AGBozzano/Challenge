import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }, 
  { path: 'post/:id', component: PostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class RoutingModule { }