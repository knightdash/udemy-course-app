//////// ********* Section2 : Basic **************** ////////

// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { ServerComponent } from './Section2-Basic/server/server.component';
// import { ServersComponent } from './Section2-Basic/servers/servers.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     ServerComponent,
//     ServersComponent,
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }













//////// ********* Section5 : Components & Databinding Deep Dive**************** ////////
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppComponent } from './app.component';
// import { CockpitComponent } from './Section5-Component&DatabindingDeep/cockpit/cockpit.component';
// import { ServerElementComponent } from './Section5-Component&DatabindingDeep/server-element/server-element.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     CockpitComponent,
//     ServerElementComponent,  
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }










//////// ********* Section7 : Directice Deep Dive**************** ////////
// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';


// import { AppComponent } from './app.component';
// import { BasicHighLightDirective } from './Section7-Directive Deep Dive/basic-highlight/basic-highlight.directive';
// import { BetterHighlightDirective } from './Section7-Directive Deep Dive/better-highlight/better-highlight.directive';
// import { UnlessDirective } from './Section7-Directive Deep Dive/unless/unless.directive';

// @NgModule({
//   declarations: [
//     AppComponent,
//     BasicHighLightDirective,
//     BetterHighlightDirective,
//     UnlessDirective,
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }









//////// ********* Section7 : Directice Deep Dive**************** ////////
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AccountComponent } from './Section9-Service&DependencyInjection/account/account.component';
import { NewAccountComponent } from './Section9-Service&DependencyInjection/new-account/new-account.component';
import { AccountsService } from './Section9-Service&DependencyInjection/accounts.service';
import { LoggingService } from './Section9-Service&DependencyInjection/logging.service';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountsService, LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }

