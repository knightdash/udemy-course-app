/********* Section11 : Changing Pages with Routing****************/
// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from './auth-guard.service';
// import { ErrorPageComponent } from './Section11-Changing Pages with Routing/error-page/error-page.component';
// import { HomeComponent } from './Section11-Changing Pages with Routing/home/home.component';
// import { PageNotFoundComponent } from './Section11-Changing Pages with Routing/page-not-found/page-not-found.component';
// import { CanDeactivateGuard } from './Section11-Changing Pages with Routing/servers/edit-server/can-deactivate-guard.service';
// import { EditServerComponent } from './Section11-Changing Pages with Routing/servers/edit-server/edit-server.component';
// import { ServerResolver } from './Section11-Changing Pages with Routing/servers/server/server-resolver.service';
// import { ServerComponent } from './Section11-Changing Pages with Routing/servers/server/server.component';
// import { ServersComponent } from './Section11-Changing Pages with Routing/servers/servers.component';
// import { UserComponent } from './Section11-Changing Pages with Routing/users/user/user.component';
// import { UsersComponent } from './Section11-Changing Pages with Routing/users/users.component';

// const appRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   {
//     path: 'users', component: UsersComponent, children: [
//       { path: ':id/:name', component: UserComponent }
//     ]
//   },
//   {
//     path: 'servers',
//     // canActivate: [AuthGuard], 
//     canActivateChild: [AuthGuard],
//     component: ServersComponent,
//     children: [
//       { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } },
//       { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
//     ]
//   },
//   // { path: 'not-found', component: PageNotFoundComponent },
//   { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found!' } },
//   { path: '**', redirectTo: '/not-found' }
// ];

// @NgModule({
//   imports: [
//     RouterModule.forRoot(appRoutes, { useHash: true })
//   ],
//   exports: [RouterModule]

// })
// export class AppRoutingModule {

// }
























/********* Section13 : Understanding Observable ****************/
// import { NgModule } from "@angular/core";
// import { RouterModule, Routes } from "@angular/router";
// import { HomeComponent } from "./Section13-Observables/home/home.component";
// import { UserComponent } from "./Section13-Observables/user/user.component";

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'user/:id', component: UserComponent}
// ]

// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes)
//   ],
//   exports: [
//     RouterModule
//   ]
// })
// export class AppRoutingModule {

// }