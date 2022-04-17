import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnDestroy {
  public title!: string;
  getArguments$: Subscription;

  constructor( private router: Router ) {
    this.getArguments$ = this.getArgumentRoute().subscribe( ({ title }) => {
      this.title = title;
      document.title = 'AdminPro - ' + title;
    });
  }

  ngOnDestroy(): void {
    this.getArguments$.unsubscribe();
  }

  getArgumentRoute() {
    return this.router.events.pipe(
      filter( (event: any) => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data )
    )
  }

}
