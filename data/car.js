export class Car{
    brand;
    model;
    speed=0;
    isTrunkOpen;
    constructor(cardetails){
        this.brand=cardetails.brand;
        this.model=cardetails.model;
        this.isTrunkOpen=cardetails.isTrunkOpen;
         
    }

    displayInfo(){
        let trunckstatus= this.isTrunkOpen?'open': 'closed';
        console.log(`${this.brand} ${this.model} ${this.speed}Km/h Trunk:${trunckstatus}`)
        // console.log(this.brand);
        // console.log(this.model); 
    }
    go(){
        if(this.isTrunkOpen===true){
            this.openTrunk()
            return;
        }
        console.log(this.speed+=5)
        if(this.speed>200){
            this.speed=200;
        
        }; 
        
    };
    brake(){
        
        console.log(this.speed-=5);
        if(this.speed<0){
            this.speed=0;
        };
        
        
        
    };
    openTrunk(){
        this.isTrunkOpen=true ;
        console.log('your trunk is open you can\'t start the car')
           
        
        
    }
    closeTrunk(){
        this.isTrunkOpen=false
        console.log('your trunk is closed ')
        this.displayInfo()

        
    }

};

class Racecar extends Car{
    acceleration;
    constructor(cardetails){
        super(cardetails)
        this.acceleration=cardetails.acceleration;
    }
    displayInfo(){
        const trunckstatus='for racecar ther will be no trunk'
        console.log(`${this.brand} ${this.model} ${this.speed}Km/h Trunk:${trunckstatus}`)
    }
    go(){
        this.speed+=this.acceleration

        if(this.speed===300){
            this.speed=0
        }
        this.displayInfo()
    }
    
    openTrunk(){
        this.isTrunkOpen=true;
        console.log('No Trunk')
    }
    closeTrunk(){
        this.isTrunkOpen=false;
        console.log('No Trunk');
        
    }
}

let ferrari=new Car({
    brand:'Porche',
    model:'911'  ,
    isTrunkOpen:false
});
let mcleran=new Racecar({
    brand:'mclaren',
    model:'F1',
    acceleration:20,
    isTrunkOpen:true

})

mcleran.go()
mcleran.go()



// ferrari.go()
// ferrari.closeTrunk()
// ferrari.go()
// ferrari.openTrunk();
// ferrari.go()
// ferrari.closeTrunk();


// console.log(ferrari)



