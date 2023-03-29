import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JobPostsComponent} from "./pages/job-posts/job-posts.component";

const routes: Routes = [
  {path: '', component: JobPostsComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
