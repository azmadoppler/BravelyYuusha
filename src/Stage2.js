var Stage2 = Stage0.extend({
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
        this.spike2.setPosition(new cc.Point(330,80));
        this.spike3.setPosition(new cc.Point(480,80));
        this.spike4.setPosition(new cc.Point(630,80));

        this.addChild(this.spike1);
        this.addChild(this.spike2);
        this.addChild(this.spike3);
        this.addChild(this.spike4);

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
        this.spikeBottom.x -=10;
        this.spikeTop.x +=10;




        if(this.hero.y==250)
        {
            this.spike1.y+=290;
            this.spike2.y+=290;
            this.spike3.y+=290;
            this.spike4.y+=290;
        }





        if(this.spike1.closeTo(this.hero))
        {
            this.hero.dead();
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
        if(this.spikeTop.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.spikeBottom.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.spikeTop.x == 810)
        {
            this.spikeTop.x = 0;
        }
        if(this.spikeBottom.x == -10)
        {
            this.spikeBottom.x = 800;
        }

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
            cc.director.runScene( new StageThreeScene );
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
            cc.director.runScene( new StageOneScene() );
        }
    }

});
 var StageTwoScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new Stage2();
        layer.init();
        this.addChild( layer );
    }
});
