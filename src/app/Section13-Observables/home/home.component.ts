import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { Subscription } from 'rxjs-compat';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstobSubs: Subscription;

  ngOnInit(): void {
    // this.firstobSubs = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    ////Create custom Observable
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count == 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater 3!'));
        }
        count++;
      }, 1000)
    });


    this.firstobSubs = customIntervalObservable
    // .pipe(
    //   filter(data => {
    //     return data > 0;
    //   }),
    //   map((data: number) => {
    //     return 'Round: ' + (data + 1);
    //   })
    // )
    .subscribe(data => {
      console.log(data);
    }, error => {
      console.log(error);
      alert(error.message);
    }, () => {
      console.log('Complete');
    })
  }

  ngOnDestroy() {
    this.firstobSubs.unsubscribe();
  }
}
