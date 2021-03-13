class Form{
    constructor() {
        this.input1 = createInput("Enter Singles/Doubles");
        this.input2 = createInput();
        this.input3 = createInput("Name");
        this.input4 = createInput("Name");
        this.input5 = createInput("Name");
        this.input6 = createInput("Name");
        this.button1 = createButton('Start');
        this.greeting = createElement('h2')
        this.button=createButton('Submit')
        this.title = createElement('h2')
    }
    
    disappear(){
        if(this.input1.value()==="doubles"){
        this.title.hide()
        this.input1.hide()
        this.input2.style('font-size', '24px');
        this.input2.style('border', '1px solid black'); 
        this.input2.style('text-align', 'center'); 
        this.input2.style('color', 'red'); 
        this.input2.show();
        this.input3.show();
        this.input4.show();
        this.input5.show();
        this.input6.show();
        this.button.hide()
        this.button1.show()
        var mp=this.input2.value()
        this.button1.mousePressed(()=>{ 
        this.setmaxpoints(mp)
             //this.disappear();
         } ) 
        }
        else{
            this.title.hide()
            this.input1.hide()
            this.input2.style('font-size', '24px');
            this.input2.style('border', '1px solid black'); 
            this.input2.style('text-align', 'center'); 
            this.input2.style('color', 'red'); 
            this.input2.show();
            this.input3.show();
            this.input4.show();
            this.button.hide()
            this.button1.show()
         //   var mp=this.input2.value()
           this.button1.mousePressed(()=>{
                console.log(this.input2.value()) 
                //console.log(mp)
                this.setmaxpoints(mp)
                     //this.disappear();
                 } ) 
        }
    }

    setmaxpoints(mp1){
        database.ref('/').update({
          maxpoints: mp1
        });
    }

    
   

    display(){
    
    this.title.html("Badminton Score Tracker");
    this.title.position(500,100)
     this.input2.hide() 
     this.input3.hide() 
     this.input4.hide() 
     this.input5.hide() 
     this.input6.hide()   
     this.button1.hide()
     this.input1.position(550,200);
     this.input2.position(255,500)
     this.input3.position(380,150)
    this.input4.position(380,310)
    this.input5.position(755,150)
    this.input6.position(755,310)
   this.button1.position(1100,400);
    this.button.position(600,250)
    this.button.mousePressed(()=>{ 
       // var inputval=document.getElementById("")
        
        this.disappear();
    } ) 
    }

}