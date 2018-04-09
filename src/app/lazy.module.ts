import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LazyParentComponent } from './lazy-parent/lazy-parent.component';
import { LazyChildComponent } from './lazy-child/lazy-child.component';
import { LazyOtherParentComponent } from './lazy-other-parent/lazy-other-parent.component';
import { LazyOtherChildComponent } from './lazy-other-child/lazy-other-child.component';

const routes: Routes = [
    { path: 'load-me', component: LazyParentComponent }
];

const newRoutes: Routes = [
  { path: 'other-load-me', component: LazyOtherParentComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LazyParentComponent,
    LazyChildComponent
  ]
})
export class LazyModule { }


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(newRoutes)
  ],
  declarations: [
    LazyOtherParentComponent,
    LazyOtherChildComponent
  ]
})
export class OtherLazyModule { }
