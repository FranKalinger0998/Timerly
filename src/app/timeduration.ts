export class timekeeper{

    date1: Date= new Date();
    date2: Date= new Date();

    constructor(date1:Date, date2:Date){
        
        this.date1=date1;
        this.date2=date2;
    }

    datedifference(date1:Date, date2:Date):Date {
        
        return new Date(Math.abs(date2.getTime() - date1.getTime()));
         }

    
}