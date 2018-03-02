import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loadingSpinner.component.html',
  styleUrls: ['./loadingSpinner.component.scss']
})
export class LoadingSpinnerComponent {
  @Input() isLoading: boolean;
  @Input() message: string;
}
