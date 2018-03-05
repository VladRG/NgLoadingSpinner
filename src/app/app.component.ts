import { Component, OnInit } from '@angular/core';
import { HasLoadingSpinnerBase } from './VgLoadingSpinner/vgHasLoadingSpinner.base';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends HasLoadingSpinnerBase implements OnInit {
  fetchData(): Observable<any> {
    return Observable.of({
      message: 'Hello'
    }).delay(5000);
  }

  ngOnInit() {
    this.wrapObservableWithSpinner(this.fetchData.bind(this)).subscribe(data => {
      console.log(data);
    });
  }
}
