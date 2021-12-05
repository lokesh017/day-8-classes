class uber{
    constructor(name,kilometers,price){
        this.name=name;
        this.kilometers=kilometers;
        this.price=kilometers*18;
    }
}
uber1 =new uber("johndoe",9,"");
console.log(uber1.name,uber1.kilometers,uber1.price);