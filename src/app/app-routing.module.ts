import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: 'posts', component: PostListComponent },
  { path: 'posts/:id', component: PostDetailsComponent },
  { path: '**', redirectTo: 'posts' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
