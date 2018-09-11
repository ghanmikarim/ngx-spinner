export class LoadingSpinner {
    showSpinner  = false;
    loadingText  = 'STANDARD';

    get show(): LoadingSpinner {
        this.showSpinner = true;
        return this;
    }

    get hide(): LoadingSpinner {
        this.showSpinner = false;
        return this;
    }
};

