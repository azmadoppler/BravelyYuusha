var Switch = cc.Sprite.extend({


	ctor: function(){
		this._super();
		this.initWithFile("res/images/switch.png");
		

	},

	closeTo: function( obj ) 
    {
        var myPos = this.getPosition();
        var oPos = obj.getPosition();
            return ( ( Math.abs( myPos.x - oPos.x ) <= 20 ) && ( Math.abs( myPos.y - oPos.y ) <= 50 ) );
    }

	});