# Angular 2+ per component Loading Spinner

## Installation
```npm
npm install --save vg-loading-spinner
```

## Usage
###
1. Import the VgLoadingModule into your AppModule
2. Extend the HasLoadingSpinnerBase
3. Wrap your component with the <vg-loading-spinner></vg-loading-spinner> tags
```html
  <vg-loading-spinner [isLoading]='isLoading' message='Loading...'>
    // your content goes here
  </vg-loading-spinner>
```
4. Call the wrapObservableWithSpinner function from HasLoadingSpinnerBase passing a function that returns an Observable as a callback in the ngOnInit function.
```typescript
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
Or, alternatively, if you have a list of Observables and you want to show the loading spinner until all of them complete you can call the wrapObservableArrayWithSpinner function passing a function that returns an Observable array.
```typescript
  export class AppComponent extends HasLoadingSpinnerBase implements OnInit {
  fetchData(): Array<Observable<any>> {
    return [
      Observable.of({ message: 'Hello' }).delay(3000),
      Observable.of({ message: 'Hello' }).delay(4000),
      Observable.of({ message: 'Hello' }).delay(5000)
    ];
  }

  ngOnInit() {
    // this function uses Observable.forkJoin in order to wait for all the Observables
    this.wrapObservableArrayWithSpinner(this.fetchData.bind(this)).subscribe(data => {
      console.log(data);
    });
  }
}
```
It is important to always call the subscribe function even if you use the async pipe directly with the Observable.
```typescript
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
