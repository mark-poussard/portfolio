export interface ILocalProps{
    en : string;
    fr : string;
}

export default class Local{
    static EN = new Local("EN", "English");
    static FR = new Local("FR", "Français");

    private smallName : string;
    private longName : string;

    constructor(smallName : string, longName : string){
        this.smallName = smallName;
        this.longName = longName;
    }

    getSmallName = () => this.smallName;
    getLongName = () => this.longName;
}