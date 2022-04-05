import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ErrorComponent} from './views/error/error.component';
import {LandingComponent} from './components/landing/landing.component';
import {LandingGuard} from "./guards/landing.guard";

const routes: Routes = [
      {
        path: 'landing',
        component: LandingComponent,
      },
      {
        path: '',
        redirectTo: 'landing',
        pathMatch : 'full'
      },
      {
        path: '**',
        component: ErrorComponent,
      }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
