export class cusSort {
    private sortOrder = 1;
    private collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: 'base'
    });

    // constructor() {
    // }

    public startSort(property, order, type = ''): any {
        if (order === 'desc') {
            this.sortOrder = -1;
        }
        return (a, b) => {
            if (type === 'date') {
                return this.sortDate(new Date(a[property]), new Date(b[property]));
            } else {
                return this.collator.compare(a[property], b[property]) * this.sortOrder;
            }
        };
    }
    private sortDate(a, b): any {
        if (a < b) {
            return -1 * this.sortOrder;
        } else if (a > b) {
            return 1 * this.sortOrder;
        } else {
            return 0 * this.sortOrder;
        }
    }
}
