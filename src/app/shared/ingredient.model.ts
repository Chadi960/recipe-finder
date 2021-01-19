export class Ingredients{
    constructor(public name: string, public amount: number){} //Typscript shortcut feature, by assigning the access modifier it automatically creates the fields/var, thus no need for this.name ...
}
//Named the folder 'shared', because it will contain features for our app that will be shared among other features and components