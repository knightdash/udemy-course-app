import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

import { HomeComponent } from './Section11-Changing Pages with Routing/home/home.component';
import { PageNotFoundComponent } from './Section11-Changing Pages with Routing/page-not-found/page-not-found.component';
import { EditServerComponent } from './Section11-Changing Pages with Routing/servers/edit-server/edit-server.component';
import { ServerComponent } from './Section11-Changing Pages with Routing/servers/server/server.component';
import { ServersComponent } from './Section11-Changing Pages with Routing/servers/servers.component';
import { UserComponent } from './Section11-Changing Pages with Routing/users/user/user.component';
import { UsersComponent } from './Section11-Changing Pages with Routing/users/users.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users', component: UsersComponent, children: [
      { path: ':id/:name', component: UserComponent }
    ]
  },
  {
    path: 'servers', canActivate: [AuthGuard], component: ServersComponent, children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent }
    ]
  },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule {

}