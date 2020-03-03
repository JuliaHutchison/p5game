

function jumper() {
    this.x = 0; //"this" is what it is reffering to, it is like a varible
    this.y = 0;
    this.gravity = 0.5;
    this.lift = -10; // jumping
    this.velocity = 0;
    // building a function on the screen, putting the values of the jumper on the screen 
    this.show = function () {
        fill("red");
        ellipse(this.x, this.y, 50, 50);

    }
    // building the function called up that will modify the lift and modify the gravity
    this.up = function () {
        this.velocity += this.lift;
    }
    //this will continously update the jumper 
    this.update = function () {
        this.velocity += this.gravity;
        this.y += this.velocity;
        this.velocity *= 0.9; //air resistence

        //This will prevent the jumper from loeaving the ground
        if (this.y > h) {
            this.y = h;
            this.velocity = 0;
        }
        //this will prevent the jumper from leaving the top
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }

}