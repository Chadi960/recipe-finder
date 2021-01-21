import { Ingredients } from '../shared/ingredient.model';

export class Recipe {
    public id: number;
    public name: string;
    public description: string;
    public nutritionalInfo: {
        calories: string,
        protein: string,
        fat: string,
        carbs: string,
        readyInMinutes: number,
        servings: number}
    public imagePath: string;
    public Ingredients: Ingredients[];

    constructor(name: string, desc: string, imagePath: string, Ing?: Ingredients[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.Ingredients = Ing;
    }

}