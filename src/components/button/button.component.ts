import { Input, Component } from '@angular/core';

@Component({
    selector: 'app-button',
    template: `
    <button [disabled]="disabled" [attr.id]="id">
        <span [ngClass]="(!loading) ? 'visible' : 'invisible'"><ng-content></ng-content></span>
        <ng-container *ngIf="loading">
            <span class="loader">
                <img *ngIf="loaderColor === 'white'" class="svg-loader" src="assets/svg-loaders/three-dots.svg" width="20" alt="Loading...">
                <img *ngIf="loaderColor === 'red'" class="svg-loader" src="assets/svg-loaders/three-dots-red.svg" width="20" alt="Loading...">
            </span>
        </ng-container>
    </button>`,
    // templateUrl: './button.component.html',
    // styleUrls: ['**./**button.component.scss']
})
export class ButtonComponent
{
    @Input('id') id: string = null;
    @Input('disabled') disabled: boolean = false;
    @Input('loading') loading: boolean = false;
    @Input('loaderColor') loaderColor: 'white'|'red' = 'white';
}
