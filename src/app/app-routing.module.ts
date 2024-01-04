import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewAComponent } from './views/view-a/view-a.component';
import { ViewBComponent } from './views/view-b/view-b.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'view-a' },
  { path: 'view-a', component: ViewAComponent },
  { path: 'view-b', component: ViewBComponent },
  { path: '**', redirectTo: 'view-a' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
