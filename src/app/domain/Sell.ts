export class Sell {
    private sellId: number;
    private date: Date;    
    private notes: string | null;


    constructor(sellId: number, date: Date, notes: string) {
        this.sellId = sellId;
        this.date = date;
        this.notes = notes;
    }

    
    public getDate() {
        return this.date;
    }

    public setDate(newDate: Date) {
        this.date = newDate;
    }

    public getNotes() {
        return this.notes;
    }

    public setNotes(newNotes: string) {
        this.notes = newNotes;
    }

}






const myNumber = 0.1 + 0.3;

console.log(myNumber);