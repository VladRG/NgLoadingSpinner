import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/map';
import { forkJoin } from 'rxjs/observable/forkJoin';

export class HasLoadingSpinnerBase {
  constructor() {
    this.isLoading = false;
    this.message = 'Loading...';
  }

  isLoading: boolean;
  message: string;

  public wrapObservableArrayWithSpinner(fetchData: () => Array<Observable<any>>): Observable<any> {
    this.startSpinner();
    return forkJoin(...fetchData())
      .map(data => data)
      .finally(() => {
        this.stopSpinner();
      });
  }

  public wrapObservableWithSpinner(fetchData: () => Observable<any>): Observable<any> {
    this.startSpinner();
    return fetchData()
    .map(data => data)
    .finally(() => {
        this.stopSpinner();
      });
  }

  public setMessage(message: string) {
    this.message = message;
  }

  private stopSpinner() {
    this.isLoading = false;
  }

  private startSpinner() {
    this.isLoading = true;
  }
}
