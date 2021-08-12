import { Component } from '@angular/core';
import { SpinnerService } from '@app/shared/services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: `
  <div class="overlay" *ngIf="isLoading$ | async">
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  </div>
  `,
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  isLoading$ = this.spinnerSrc.isLoading$;
  constructor(private spinnerSrc: SpinnerService) { }
}
