import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { filter, map, retry, take } from 'rxjs/operators';

@Component({
  selector: 'app-rjxs',
  templateUrl: './rjxs.component.html',
  styleUrls: ['./rjxs.component.css']
})
export class RjxsComponent implements OnDestroy {

  // intervalNumber: Subscription;

  constructor() {

    // this.returnIntervalNumber().pipe(
    //   retry(1)
    // ).subscribe( {
    //   next: (v) => console.log(v),
    //   error: (e) => console.warn(e),
    //   complete: () => console.info('Complete')
    // });

    // this.intervalNumber = this.returnIntervaL().subscribe(
    //   console.log
    // );

  }
  ngOnDestroy(): void {
    // this.intervalNumber.unsubscribe();
  }

  returnIntervaL(): Observable<number> {
    return interval(500)
            .pipe(
              // take(10),
              map( value => value + 1),
              filter(value => value % 2 === 0 ),
            );
  }

  returnIntervalNumber(): Observable<number> {
    let i = -1;
    return new Observable<number>( observer => {
      const interval = setInterval(() => {
        i++
        observer.next(i);

        if ( i === 4 ){
          clearInterval( interval );
          observer.complete();
        }
        if ( i === 2 ){
          observer.error('error wrong value');
        }
      },1000);
    });
  }

  ngOnInit(): void {
  }

}
