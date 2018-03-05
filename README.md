# Angular 2+ per component Loading Spinner

## Installation
```
npm install --save vg-loading-spinner
```

## Usage
###
1. Import the VgLoadingModule into your AppModule
2. Extend the HasLoadingSpinnerBase
3. Wrap your component with the <vg-loading-spinner></vg-loading-spinner> tags
```
  <vg-loading-spinner [isLoading]='isLoading' message='Loading...'>
    // your content goes here
  </vg-loading-spinner>
```
4. Call the wrapObservableWithSpinner function from HasLoadingSpinnerBase passing a function that returns an Observable as a callback in the ngOnInit function.
```
export class AppComponent extends HasLoadingSpinnerBase implements OnInit {
  fetchData(): Observable<any> {
    return Observable.of({ message: 'Hello' }).delay(5000);
  }

  ngOnInit() {
    this.wrapObservableWithSpinner(this.fetchData.bind(this)).subscribe(data => {
      console.log(data);
    });
  }
}

```
It is important to always call the subscribe function even if you use the async pipe directly with the Observable.
```
export class AppComponent extends HasLoadingSpinnerBase implements OnInit {

  message: Observable<string>;
  fetchData(): Observable<any> {
    this.message = Observable.of('Hello').delay(5000);
    return this.message;
  }

  ngOnInit() {
    this.wrapObservableWithSpinner(this.fetchData.bind(this)).subscribe();
  }
}

```
