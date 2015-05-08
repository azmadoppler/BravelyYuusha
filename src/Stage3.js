var Stage3 = Stage0.extend({
    init: function() {
       this._super();


    },


     generateEnemy: function()
    {
        this.spike1 = new Spike();
        this.spike2 = new Spike();
        this.spike3 = new Spike();
        this.spike4 = new Spike();
        this.spike5 = new Spike();

        this.spike1.setPosition(new cc.Point(180,80));
        this.spike2.setPosition(new cc.Point(330,290));
        this.spike3.setPosition(new cc.Point(480,80));
        this.spike4.setPosition(new cc.Point(630,290));
        var rotateUpward1 = cc.RotateBy.create(0,180);
        var rotateUpward2 = cc.RotateBy.create(0,180);
        this.spike2.runAction(rotateUpward1);
        this.spike4.runAction(rotateUpward2);




        this.addChild(this.spike1);
        this.addChild(this.spike2);
        this.addChild(this.spike3);
        this.addChild(this.spike4);


        this.topSpike1 = new Spike();
        this.topSpike2 = new Spike();
        this.topSpike3 = new Spike();
        this.topSpike4 = new Spike();

        this.topSpike1.setPosition(new cc.Point(180,370));
        this.topSpike2.setPosition(new cc.Point(330,580));
        this.topSpike3.setPosition(new cc.Point(480,370));
        this.topSpike4.setPosition(new cc.Point(630,580));

        var rotateTopUpward1 = cc.RotateBy.create(0,180);
        var rotateTopUpward2 = cc.RotateBy.create(0,180);
        this.topSpike2.runAction(rotateTopUpward2);
        this.topSpike4.runAction(rotateTopUpward1);

        this.addChild(this.topSpike1);
        this.addChild(this.topSpike2);
        this.addChild(this.topSpike3);
        this.addChild(this.topSpike4);

        this.spikeTop = new Spike();
        this.spikeBottom = new Spike();
        this.spikeTop.setPosition(new cc.Point (0 , 370));
        this.spikeBottom.setPosition(new cc.Point (800, 80));
        var rotateSpike1 = cc.RotateBy.create(0,90);
        var rotateSpike2 = cc.RotateBy.create(0,270);
        this.spikeTop.runAction(rotateSpike1);
        this.spikeBottom.runAction(rotateSpike2);
        this.addChild(this.spikeTop);
        this.addChild(this.spikeBottom);

    },


    update: function( dt )
    {
        this.spike1.y +=5;
        this.spike2.y -=5;
        this.spike3.y +=5;
        this.spike4.y -=5;
        
        this.topSpike1.y +=5;
        this.topSpike2.y -=5;
        this.topSpike3.y +=5;
        this.topSpike4.y -=5;

        if(this.spike1.y == 300)
        {
            this.spike1.y = 80;
        }

        if(this.spike3.y == 300)
        {
            this.spike3.y = 80;
        }

        if(this.spike4.y == 80 )
        {
            this.spike4.y = 300;
        }

        if(this.spike2.y == 80 )
        {
            this.spike2.y = 300;
        }

        if(this.spikeTop.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.spikeBottom.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.spikeTop.x >= 810)
        {
            this.spikeTop.x = 0;
        }
        if(this.spikeBottom.x <= -10)
        {
            this.spikeBottom.x = 800;
        }


        if(this.topSpike1.y == 600 )
        {
            this.topSpike1.y = 370 ;
        }

        if(this.topSpike3.y == 600 )
        {
            this.topSpike3.y = 370;
        }

        if(this.topSpike4.y == 370 )
        {
            this.topSpike4.y = 600;
        }

        if(this.topSpike2.y == 370 )
        {
            this.topSpike2.y = 600;
        }
        


        
        if(this.spike1.closeTo(this.hero))
        {   
            this.hero.dead();
            //this.hero.dead();
        }
        if(this.spike2.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.spike3.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.spike4.closeTo(this.hero))
        {
            this.hero.dead();
        }

        if(this.topSpike1.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.topSpike2.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.topSpike3.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.topSpike4.closeTo(this.hero))
        {
            this.hero.dead()
        }
        //additional spike

        this.spikeBottom.x -=4;
        this.spikeTop.x +=4;

        if(this.isAbleToClimb())
        {
            this.hero.canClimb = true;
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
            cc.director.runScene( new BossCutScene );
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
            cc.director.runScene( new StageThreeScene() );
        }
    }

});
 var StageThreeScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new Stage3();
        layer.init();
        this.addChild( layer );
    }
});