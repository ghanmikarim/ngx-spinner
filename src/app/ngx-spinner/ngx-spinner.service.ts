import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LoadingSpinner } from './loading.spinner.model';

@Injectable()
export class NgxSpinnerService {
    /**
     * Spinner observable
     *
     * @memberof NgxSpinnerService
     */
    public spinnerObservable = new Subject<LoadingSpinner>();
    /**
     * Creates an instance of NgxSpinnerService.
     * @memberof NgxSpinnerService
     */
    constructor() { }

    /**
     * To show spinner
     *
     * @memberof NgxSpinnerService
     */
    show() {
        this.spinnerObservable.next(new LoadingSpinner().show);
    }

    /**
     * To hide spinner
     *
     * @memberof NgxSpinnerService
     */
    hide() {
        this.spinnerObservable.next(new LoadingSpinner().hide);
    }
}
