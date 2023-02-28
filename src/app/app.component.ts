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
// import { Component, OnInit } from "@angular/core";
// import { UserService } from "./Section13-Observables/user/user.service";

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   userActivated = false;
//   constructor(
//     private userService: UserService
//   ) {}

//   ngOnInit() {
//     this.userService.activatedEmitter.subscribe( state => {
//       this.userActivated = state;
//     })
//   }
// }




















//////// ********* Section15 : Form TD **************** ////////
// import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
// import { NgForm } from "@angular/forms";

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   @ViewChild('f', {static: true}) signupForm: NgForm;
//   defaultQuestion = 'pet';
//   answer = '';
//   genders = ['male', 'female'];
//   user = {
//     username: '',
//     email: '',
//     secretQuestion: '',
//     answer: '',
//     gender: ''
//   };
//   submitted = false;

//   constructor() {}

//   ngOnInit() {
//   }

//   suggestUserName() {
//     const suggestedName = 'Superuser';
//     // this.signupForm.setValue({
//     //   userData: {
//     //     username: suggestedName,
//     //     email: ''
//     //   },
//     //   secret: 'pet',
//     //   questionAnswer: '',
//     //   gender: 'male'
//     // })
//     this.signupForm.form.patchValue({
//       userData: {
//         username: suggestedName
//       }
//     })
//   }
//   // onSubmit(form: HTMLFormElement) {
//   //   console.log(form);
//   // }  
//   // onSubmit(form: NgForm) {
//   //   console.log(form);
//   // }  
//   onSubmit() {
//     this.submitted = true;
//     console.log(this.signupForm);
//     this.user.username = this.signupForm.value.userData.username;
//     this.user.email = this.signupForm.value.userData.email;
//     this.user.secretQuestion = this.signupForm.value.secret;
//     this.user.answer = this.signupForm.value.questionAnswer;
//     this.user.gender = this.signupForm.value.gender;

//     this.signupForm.reset();
//   }  
// }









//////// ********* Section15 : Form Reactive **************** ////////
// import { Component, OnInit } from "@angular/core";
// import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
// import { Observable } from "rxjs";
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent implements OnInit {
//   genders = ['male', 'female']
//   signupForm: FormGroup;
//   forbiddenUsernames = ['Chris', 'Anna'];

//   ngOnInit() {
//     this.signupForm = new FormGroup({
//       'userData': new FormGroup({
//         'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
//         'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenEmails),
//       }),
//       'gender': new FormControl('male'),
//       'hobbies': new FormArray([])
//     });
//     this.signupForm.valueChanges.subscribe((value) => {
//       console.log(value);
//     });

//     this.signupForm.statusChanges.subscribe((value) => {
//       console.log(value);
//     });

//     this.signupForm.setValue({
//       'userData': {
//         'username': 'Max',
//         'email': 'max@test.com'
//       },
//       'gender': 'male',
//       'hobbies': []
//     });

//     this.signupForm.patchValue({
//       'userData': {
//         'username': 'Anna'
//       }
//     })
//   }

//   onSubmit() {
//     console.log(this.signupForm);
//     this.signupForm.reset();
//     this.signupForm.patchValue({'gender': 'male'});
//   }

//   onAddHobby() {
//     const control = new FormControl(null, Validators.required);
//     (<FormArray>this.signupForm.get('hobbies')).push(control);
//   }

//   getControls() {
//     return (<FormArray>this.signupForm.get('hobbies')).controls;
//   }

//   forbiddenNames(control: FormControl): { [s: string]: boolean } {
//     if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
//       return { 'nameIsForbidden': true };
//     }
//     return null;
//   }

//   forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
//     const promise = new Promise<any>((resolve, reject) => {
//       setTimeout(() => {
//         if(control.value === 'test@test.com') {
//           resolve({'emailIsForbidden': true})
//         } else {
//           resolve(null);
//         }
//       }, 1500)
//     })

//     return promise;
//   }
// }

















/////********* Section17 : Using Pipes ro Transform Output****************//////
// import { Component, OnInit } from '@angular/core';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {

//   appStatus = new Promise<any>((resolve, reject) => {
//     setTimeout(() => {
//       resolve('stable')
//     },2000)
//   })
  
//   servers = [
//     {
//       instanceType: 'medium',
//       name: 'Production Server',
//       status: 'stable',
//       started: new Date(15, 1, 2017)
//     },
//     {
//       instanceType: 'large',
//       name: 'User Database',
//       status: 'stable',
//       started: new Date(15, 1, 2017)
//     },
//     {
//       instanceType: 'small',
//       name: 'Development Server',
//       status: 'offline',
//       started: new Date(15, 1, 2017)
//     },
//     {
//       instanceType: 'small',
//       name: 'Testing Environment Server',
//       status: 'stable',
//       started: new Date(15, 1, 2017)
//     }
//   ];

//   filteredStatus = '';

//   ngOnInit(): void {

//   }

//   getStatusClasses(server: any) {
//     return {
//       'list-group-item-success': server.status === 'stable',
//       'list-group-item-warning': server.status === 'offline',
//       'list-group-item-danger': server.status === 'critical',
//     }
//   }

//   onAddServer() {
//     this.servers.push({
//       instanceType: 'small',
//       name: 'Aew Server',
//       status: 'stable',
//       started: new Date(10, 10, 2022)
//     })
//   }
// }



















/////********* Section18 : Making HTTP request****************//////
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  ngOnInit(): void {
      
  }
}