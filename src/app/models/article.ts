
export class Article {
    constructor(
        // tslint:disable-next-line:variable-name
        public _id: string,
        public title: string,
        public content: string,
        public image: string,
        public date: any
    ){}

}
// title: String,
// content: String,
// date: { type: Date, default: Date.now },
// image: String