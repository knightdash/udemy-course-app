//////// ********* Section2 : Basic **************** ////////

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   // styleUrls: ['./app.component.css']
//   styles: [`
//     h3 {
//       color: dodgerblue;
//     }
//   `],
// })
// export class AppComponent {
// }






//////// ********* Section5 : Components & Databinding Deep Dive**************** ////////
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
//   // styles: [],
// })
// export class AppComponent {
//   serverElements = [
//     {
//       type: 'server',
//       name: 'Testserver',
//       content: 'Just test!'
//   }];

//   onServerAdd(serverData: {serverName: string, serverContent: string}) {
//     this.serverElements.push({
//       type: 'server',
//       name: serverData.serverName,
//       content: serverData.serverContent
//     });
//   }

//   onBlueprintAdd(serverData: {serverName: string, serverContent: string}) {
//     this.serverElements.push({
//       type: 'blueprint',
//       name: serverData.serverName,
//       content: serverData.serverContent
//     });
//   }

//   onChangeFirst() {
//     this.serverElements[0].name = 'changed!';
//   }

//   onFirstDestry() {
//     this.serverElements.splice(0,1);
//   }
// }






//////// ********* Section7 : Directive Deep Dive**************** ////////
// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   numbers = [1, 2, 3, 4, 5];
//   oddNumbers = [1, 3, 5];
//   evenNumbers = [2, 4];
//   onlyOdd = false;
//   value = 10;
// }





//////// ********* Section7 : Directive Deep Dive**************** ////////
// import { Component, OnInit } from '@angular/core';
// import { AccountComponent } from './Section9-Service&DependencyInjection/account/account.component';
// import { AccountsService } from './Section9-Service&DependencyInjection/accounts.service';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent  implements OnInit {
//   accounts: { name: string, status: string }[] = [];

//   constructor(private accountsService: AccountsService) { }

//   ngOnInit(): void {
//       this.accounts = this.accountsService.accounts;
//   }
// }










//////// ********* Section11 : Changing Pages with Routing**************** ////////
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {

// }












//////// ********* Section13 : Understanding Observable **************** ////////
import { Component, OnInit } from "@angular/core";
import { UserService } from "./Section13-Observables/user/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userActivated = false;
  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.activatedEmitter.subscribe( state => {
      this.userActivated = state;
    })
  }

}