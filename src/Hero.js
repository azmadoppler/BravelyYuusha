var deadCount = 0;
var Hero = cc.Sprite.extend({


	ctor: function(){
		this._super();
		this.initWithFile("res/images/hero@90degree01.png");
		this.direction = Hero.DIR.STILL;
		this.isJump=Hero.DIR.STILL;
		this.jumpLength = Hero.JUMP.START;
		this.moveRight = false;
		this.moveLeft = false;
		this.canClimb = false;
		this.ladderHeight = 300;
		this.stillClimb = false;
        this.isDead = false;
        this.isRespawn = false;
        this.ableClimb  = false;



        this.addKeyboardHandlers();

        this.movingRightAnimate = this.createMoveRightAnimation();
        this.movingLeftAnimate = this.createMoveLeftAnimation();

        this.runningRight = false;
        this.runningLeft = false;

        this.scheduleUpdate();

	},
    update: function( dt ) 
    {
        //moving left
        if( this.direction == Hero.DIR.LEFT && this.stillClimb == false && this.x>10)
        { 
            if(this.runningRight == true)
            {
                this.runningLeft = false;
            }
            this.runAction( this.movingLeftAnimate );
            this.runningLeft = true;
            this.x-=3.5;
        }

        //moving right
        if( this.direction == Hero.DIR.RIGHT && this.stillClimb == false && this.x<790)
        {
            if(this.runningLeft == true)
            {
                this.runningRight = false;   
            }
            this.runAction( this.movingRightAnimate );
            this.runningRight = true;
            this.x+=3.5;
        }

        //do da climbing
        if( this.direction == Hero.DIR.UP && this.canClimb ==true && this.stillClimb==true )
        {
            this.initWithFile("res/images/climb.png");
            this.ableClimb = true;
            

        }
        if(this.ableClimb == true ){
            this.ladderHeight-=5;
            this.y+=5;
        } 


        //climbing done
        if(this.ladderHeight==0 )
        {
        	this.stillClimb = false;
        	this.direction = Hero.DIR.STILL;
            this.initWithFile("res/images/hero@90degree01.png");    
        	this.canClimb = false; 
        	this.ladderHeight = 300;
            this.ableClimb = false;
        }

         
        if( this.isJump == Hero.DIR.JUMP && this.stillClimb == false)
        {
            if( this.jumpLength == Hero.JUMP.MAX ) 
            {
                this.isJump= Hero.DIR.STILL;
            }
            else
            {
            	this.jumpLength+=5;
            	this.y+=5;
            }   
        }
        if(this.isJump == Hero.DIR.STILL && this.jumpLength>Hero.JUMP.START && this.stillClimb == false)
        {
        	this.jumpLength-=5;
            this.y-=5;

        }
    },
    dead: function(){
        this.unscheduleUpdate();
        this.isDead = true;
        deadCount++;
    },


    addKeyboardHandlers: function()
    {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( e ) {
                self.onKeyDown( e );
            },
            onKeyReleased: function( e ) {
                self.onKeyUp( e );
            }
        }, this);
    },
     onKeyDown: function( e ) {
        if ( e == cc.KEY.left)
         {
            this.direction= Hero.DIR.LEFT ;
            this.moveRight =false;
            this.moveLeft =true;
        }
        else if (e == cc.KEY.right)
        {
            this.direction= Hero.DIR.RIGHT ;
            this.moveLeft =false;
            this.moveRight =true;
        }
        else if (e == cc.KEY.space && (this.y == 100 || this.y == 400))
        {
            this.isJump = Hero.DIR.JUMP;
        }

    },
    onKeyUp: function( e ) 
    {
        if( e == cc.KEY.r)
        {
            this.isRespawn = true;
            //cc.director.runScene( new StartScene() );
        }

        if ( e == cc.KEY.left)
        {
            if (this.moveRight==true)
            {

            }
            else
                this.direction= Hero.DIR.STILL ;
        }
        else if (e == cc.KEY.right)
        {
            if (this.moveLeft==true)
            {

            }
            else
                this.direction= Hero.DIR.STILL ;
                
        }
        else if ( e== cc.KEY.up )
        {
        	if ( this.canClimb == true )
        	{
        		this.stillClimb = true;
        		this.direction = Hero.DIR.UP;
        	}
        }

    },
    createMoveRightAnimation: function(){
    var animation = new cc.Animation.create();
    animation.addSpriteFrameWithFile( 'res/images/hero@90degree01.png' );
    animation.addSpriteFrameWithFile( 'res/images/hero@90degree01Animate.png' );
    animation.setDelayPerUnit( 1.0 );
    return cc.Animate.create( animation  );
    },

    createMoveLeftAnimation:function() {
    var animation = new cc.Animation.create();
    animation.addSpriteFrameWithFile( 'res/images/hero@90degree02.png' );
    animation.addSpriteFrameWithFile( 'res/images/hero@90degree02Animate.png' );
    animation.setDelayPerUnit( 1.0 );
    return cc.Animate.create( animation ) ;


    }

});

Hero.DIR = {
    STILL: 0,
    RIGHT: 2,
    LEFT:1,
    JUMP:3,
    UP:4
};

Hero.JUMP = {
	START: 0,
	MAX: 100

};
var HeroSingleton = (function () {
    var heroSingleton;
 
    function createInstance() {
        var obj = new Hero();
        return obj;
    }
 
    return {
        getInstance: function () {
            if (!heroSingleton) {
                heroSingleton = createInstance();
            }
            return heroSingleton;
        }
    };
})();