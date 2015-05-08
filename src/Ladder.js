var Ladder = cc.Sprite.extend({


	ctor: function(){
		this._super();
		this.initWithFile("res/images/ladder.png");

	}/*,


	isAbleToClimb: function( hero ){
		var playerPos = hero.getPosition();
		if(hero.x == 700&& hero.y == 100)
		{
			return true;
		}
		else 
			return false;

	}*/



});