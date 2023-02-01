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
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CockpitComponent } from './Section5-Component&DatabindingDeep/cockpit/cockpit.component';
import { ServerElementComponent } from './Section5-Component&DatabindingDeep/server-element/server-element.component';

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,  
  ],
  imports: [
    BrowserModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
