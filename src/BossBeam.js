var BossBeam = cc.Sprite.extend({


	ctor: function(){
		this._super();
		this.initWithFile("res/images/bossbeam.png");


	},
	update: function(){

	},
	activateTrap: function(){

	},
	closeTo: function( obj ) 
    {
        var myPos = this.getPosition();
        var oPos = obj.getPosition();
            return ( ( Math.abs( myPos.x - oPos.x ) <= 23 ) && ( Math.abs( myPos.y - oPos.y ) <= 370 ) );
    }


	
});