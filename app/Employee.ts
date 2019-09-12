export class Employee {
    fullname : String;
    constructor(public firstname : string,public middlename : string ,public lastname : string) {
       this.fullname = `${firstname} ${middlename} ${lastname}`
    }


    public getfullname = () : String => 
    {
        return this.fullname;
    };

}