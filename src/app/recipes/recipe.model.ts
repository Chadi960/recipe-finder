import { Ingredients } from '../shared/ingredient.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public Ingredients: Ingredients[];

    constructor(name: string, desc: string, imagePath: string, Ing?: Ingredients[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.Ingredients = Ing;
    }

}