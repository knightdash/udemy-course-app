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
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = [1, 2, 3, 4, 5];
  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;
  value = 10;
}



