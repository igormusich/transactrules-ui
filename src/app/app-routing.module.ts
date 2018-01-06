import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { authRoutes } from './pages/auth/auth.routing';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [

      {
        path: '',
        loadChildren: 'app/pages/data/accounts/accounts.module#AccountsModule',
        pathMatch: 'full'
      },
      {
        path: 'data/calendars',
        loadChildren: 'app/pages/data/calendar/calendar.module#CalendarModule',
      },
      {
        path: 'settings/account-types',
        loadChildren: 'app/pages/settings/account-type/account-type.module#AccountTypeModule'
      }
    ]
  },
  {
    path: 'auth',
    children: [
      ...authRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
