class Stone{
	constructor(x,y,r)
	{
	// assign options to the stone
	var options={
		'restitution':0.8,
		'friction':0.9,
		'density':12
	}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(50, 50, (0-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			//draw the ellipse here to display the stone 
            ellipse(0,0,50,50);

			pop()
	}

}