function Bird() {
    this.y = width/2;
    this.x = 64;

    this.gravity = 0.3;
    this.lift = -12;
    this.velocity = 0;

    this.show = function() {
        // fill(185);
        ellipse(this.x, this.y, 40, 40); //basic snappy bird
        // image(getImage("kenny.png")), 100,100, 40, 40);
        
        // ellipse(50, 70, 60, 120);  // left ear
        // ellipse(140, 70, 60, 120);  // right ear
        // ellipse(100, 170, 150, 150);    // face
        // fill(0, 0, 0);
        // ellipse(70, 150, 10, 10);  // left eye
        // ellipse(130, 150, 10, 10);  // right eye
        // line(60, 200, 150, 200);   // mouth
        // noFill();
        // rect(80, 200, 15, 10); // left tooth
        // rect(110, 200, 15, 10); // right tooth
        
    }

    this.up = function() {

        this.velocity += this.lift;
        console.log(this.velocity);

    }

    this.update = function() {
        this.velocity += this.gravity;
        // this.velocity = 0.9;
        this.y += this.velocity;

        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }

         
    }
}
