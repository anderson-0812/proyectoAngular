// armo laestructura de mi modelo
export class Pelicula {
    /*
    public title: string;
    public year: number;
    public image: string;

    constructor(title, year, image){
        this.title = title;
        this.year = year;
        this.image = image;
    }*/

    // Forma usando typescript
    constructor(
        public title: string,
        public year: number,
        public image: string,

    ) {}
}

