var Stage1 = Stage0.extend({
    init: function() {
       this._super();


    },


    generateEnemy: function()
    {
        this.flame1 = new Flame();
        this.flame2 = new Flame();
        this.flame3 = new Flame();
        this.flame4 = new Flame();
        this.flame5 = new Flame();

        this.flame1.setPosition(new cc.Point(200,80));
        this.flame2.setPosition(new cc.Point(300,80));
        this.flame3.setPosition(new cc.Point(400,80));
        this.flame4.setPosition(new cc.Point(500,80));
        this.flame5.setPosition(new cc.Point(600,80));

        this.addChild(this.flame1);
        this.addChild(this.flame2);
        this.addChild(this.flame3);
        this.addChild(this.flame4);
        this.addChild(this.flame5);

        this.spike1 = new Spike();
        this.spike2 = new Spike();
        this.spike1.setPosition(new cc.Point (0 , 200));
        this.spike2.setPosition(new cc.Point (800, 200));
        var rotateSpike1 = cc.RotateBy.create(0,90);
        var rotateSpike2 = cc.RotateBy.create(0,270);
        this.spike1.runAction(rotateSpike1);
        this.spike2.runAction(rotateSpike2);
        this.addChild(this.spike1);
        this.addChild(this.spike2);

    },


    update: function( dt )
    {
        this.spike1.x+=5;
        this.spike2.x-=5;

        if(this.spike1.x == 800)
        {
            this.spike1.x = 0;
        }
        if(this.spike2.x ==0 )
        {
            this.spike2.x = 800;
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
        if(this.flame2.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.flame3.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.flame4.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.flame5.closeTo(this.hero))
        {
            this.hero.dead();
        }

        if(this.hero.y==250)
        {
            this.spike1.y+=300;
            this.spike2.y+=300;
            this.flame1.y+=300;
            this.flame2.y+=300;
            this.flame3.y+=300;
            this.flame4.y+=300;
            this.flame5.y+=300;
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
            cc.director.runScene( new StageTwoScene() );
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


 var StageOneScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new Stage1();
        layer.init();
        this.addChild( layer );
    }
});
