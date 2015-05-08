var Stage0 = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
    
        this.bg = new Background();
        this.bg.setPosition( 400 , 300);
        this.addChild(this.bg);


        this.ladder1 = new Ladder();
        this.ladder1.setPosition(new cc.Point(700,200));
        this.addChild(this.ladder1);

        this.ladder2 = new Ladder();
        this.ladder2.setPosition(new cc.Point(100,500));
        this.addChild(this.ladder2);

        this.hero = new Hero();;
        this.hero.setPosition(new cc.Point(50,100));
        this.addChild(this.hero);
        this.scheduleUpdate();
        this.generateEnemy();

        return true;
    },

    generateEnemy: function()
    {
        this.spike1 = new Spike();
        this.spike1.setPosition(new cc.Point (400,80));
        this.addChild(this.spike1);
        
        this.flame1 = new Flame();
        this.flame1.setPosition(new cc.Point(300,80));
        this.addChild(this.flame1);
        

        this.spike2 = new Spike();
        this.spike2.setPosition(new cc.Point (600,80));
        this.addChild(this.spike2);

        this.spike3 = new Spike();
        this.spike3.setPosition(new cc.Point ( -50 , 380));
        var rotateSpike3 = cc.RotateBy.create(0,90);
        this.spike3.runAction(rotateSpike3);
        this.addChild(this.spike3);

        this.spike5 = new Spike();
        this.spike5.setPosition(new cc.Point ( -50 , 380));
        var rotateSpike5 = cc.RotateBy.create(0,90);
        this.spike5.runAction(rotateSpike5);
        this.addChild(this.spike5);

        this.spike6 = new Spike();
        this.spike6.setPosition(new cc.Point ( -50 , 430));
        var rotateSpike6 = cc.RotateBy.create(0,90);
        this.spike6.runAction(rotateSpike6);
        this.addChild(this.spike6);


        this.spike4 = new Spike();
        this.spike4.setPosition(new cc.Point( 850 , 380));
        var rotateSpike4 = cc.RotateBy.create(0,270);
        this.spike4.runAction(rotateSpike4);
        this.addChild(this.spike4);

    },


    update: function( dt )
    {
        if(this.hero.y>350&& this.hero.x < 350)
        {
            this.rollSpike = true;
        }
        if(this.rollSpike == true)
        {
            this.spike5.x+=5;
            this.spike6.x+=5;
            if(this.spike5.x == 600)
            {
                this.spike5.y+=1000;
                this.spike6.y+=1000;    
            }
        }


        if(this.hero.y>350)
        {
            this.spike3.x+=10;
        }
        if(this.spike3.x>800)
        {
            this.spike4.x-=15;
        }



        if(this.spike2.closeTo(this.hero))
        {
            this.hero.dead();
        }

        if(this.spike1.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.flame1.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.spike3.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.spike6.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.spike5.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.spike4.closeTo(this.hero))
        {
            this.hero.dead();
        }

        this.basicUpdate(); 
        
    },
    isAbleToClimb: function(  ){
        if(this.hero.x >690&&this.hero.x<710&&this.hero.y>80&&this.hero.y<120)
        {
            return true;
        }
        else if(this.hero.x >90&&this.hero.x<110&&this.hero.y>380&&this.hero.y<420)
        {
            return true;
        }
        else 
            return false;
        
    },


    basicUpdate: function(){

        if(this.isAbleToClimb())
        {
            this.hero.canClimb = true;
        }
        else 
        {
            this.hero.canClimb = false;
        }
        if(this.hero.y>=590)
        {
            console.log("HIT");
            cc.director.runScene( new StageOneScene );
        }
        if(this.hero.isDead==true && this.hero.isRespawn == false)
        {
            this.bg2 = new Background();
            this.bg2.initWithFile('res/images/death.jpg');
            this.bg2.setPosition(new cc.Point(400,300));
            this.addChild(this.bg2);
        }


        if(this.hero.isDead == true && this.hero.isRespawn == true)
        {
            cc.director.runScene( new StageZero() );
        }
    }

});
 
var StageZero = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new Stage0();
        layer.init();
        this.addChild( layer );
    }
});