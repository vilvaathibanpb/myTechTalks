export class QueryMethods {
    currentObservables = {};
    constructor({ options, context, forceUpdate }) {
        this.options = options;
        this.context = context;
        this.forceUpdate = forceUpdate;
    }

    execute () {
        this.refreshClient();
        this.initializeQuery();
        return this.getResults();
    }

    refreshClient() {
        const client = this.context && this.context.client;

        if(this.client !== client) {
            this.client = client;
        }
    }

    initializeQuery() {
        if(!this.currentObservables.query) {
            this.currentObservables.query = this.client.watchQuery(this.options);
        }
    }

    getResults() {
        const result = {
            data: {}
        }

        const currenResult = this.currentObservables.query.getCurrentResult();
        let {loading, error, data} = currenResult;

        data = data || {};

        Object.assign(result, {loading, error, data});
        this.startSubscription()
        return result;
    }

    startSubscription() {
        if(this.currentObservables.subscription) return;

        this.currentObservables.subscription = this.currentObservables.query.subscribe({
            next: () => this.forceUpdate()
        })
    }

}