import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'lazy', loadChildren: './lazy.module#LazyModule' },
  { path: 'lazy', loadChildren: './lazy.module#OtherLazyModule' },
  { path: 'lazy', loadChildren: './lazy.module#HangoutChatModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
