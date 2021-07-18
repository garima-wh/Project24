class Iron{
	constructor(x,y,r)
	{
	// assign options to the iron 
	var options={
		'restitution':0.3,
		'friction':3,
		'density':30
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(50, 50, (0-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the iron 
            ellipse(0,0,50,50);

			pop()
	}

}