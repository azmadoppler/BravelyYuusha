var StageBoss = Stage0.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
    
        this.bg = new Background();
        this.bg.setPosition( 400 , 300);
        this.addChild(this.bg);


        this.hero = new Hero();;
        this.hero.setPosition(new cc.Point(50,100));
        this.addChild(this.hero);
        this.scheduleUpdate();

        this.generatePhaseOneEnemy();
        
        this.readyToClimbRound1 =false;

        return true;

    },


    generatePhaseOneEnemy: function()
    {
        this.boss = new Boss();
        this.boss.setPosition( new cc.Point(400,500));
        this.addChild(this.boss);

        this.Switch = new Switch();
        this.Switch.setPosition( new cc.Point(700,100));
        this.addChild(this.Switch);

        this.Switch = new Switch();
        this.Switch.setPosition( new cc.Point(700,100));
        this.addChild(this.Switch);


       this.bossbeam1 = new BossBeam();
       this.bossbeam1.setPosition(new cc.Point(900,360));
       this.addChild(this.bossbeam1);

       this.bossbeam2 = new BossBeam();
       this.bossbeam2.setPosition(new cc.Point(900,360));
       this.addChild(this.bossbeam2);

       this.bossbeam3 = new BossBeam();
       this.bossbeam3.setPosition(new cc.Point(900,360));
       this.addChild(this.bossbeam3);

       this.bossbeam4 = new BossBeam();
       this.bossbeam4.setPosition(new cc.Point(900,360));
       this.addChild(this.bossbeam4);

       this.bossbeam5 = new BossBeam();
       this.bossbeam5.setPosition(new cc.Point(900,360));
       this.addChild(this.bossbeam5);

       this.bossbeam6 = new BossBeam();
       this.bossbeam6.setPosition(new cc.Point(900,360));
       this.addChild(this.bossbeam6);

       this.bossbeam7 = new BossBeam();
       this.bossbeam7.setPosition(new cc.Point(900,360));
       this.addChild(this.bossbeam7);

       this.bossbeam8 = new BossBeam();
       this.bossbeam8.setPosition(new cc.Point(900,360));
       this.addChild(this.bossbeam8);

       this.bossbeam9 = new BossBeam();
       this.bossbeam9.setPosition(new cc.Point(900,360));
       this.addChild(this.bossbeam9);

       this.bossbeam10 = new BossBeam();
       this.bossbeam10.setPosition(new cc.Point(900,360));
       this.addChild(this.bossbeam10);


    },
    endPhaseOne: function()
    {
        this.ladder1 = new Ladder();
        this.ladder1.setPosition(new cc.Point(100,200));
        this.addChild(this.ladder1);

        this.ladder2 = new Ladder();
        this.ladder2.setPosition( new cc.Point(700,500));
        this.addChild(this.ladder2);
    },


    update: function( dt )
    {  
        this.bossbeam1.y-=10;
        this.bossbeam2.y-=10;
        this.bossbeam3.y-=10;
        this.bossbeam4.y-=10;
        this.bossbeam5.y-=10;
        this.bossbeam6.y-=10;
        this.bossbeam7.y-=10;
        this.bossbeam8.y-=10;
        this.bossbeam9.y-=10;
        this.bossbeam10.y-=10;



        if(this.bossbeam1.y<=350)
        {
            this.bossbeam1.setPosition(new cc.Point( 150+(Math.random()*700),1000 ) );
            this.bossbeam2.setPosition(new cc.Point( 150+(Math.random()*700),1000 ) );
            this.bossbeam3.setPosition(new cc.Point( 150+(Math.random()*700),1000 ) );
            this.bossbeam4.setPosition(new cc.Point( 150+(Math.random()*700),1000 ) );
            this.bossbeam5.setPosition(new cc.Point( 150+(Math.random()*700),1000 ) );
            this.bossbeam6.setPosition(new cc.Point( 150+(Math.random()*700),1000 ) );
            this.bossbeam7.setPosition(new cc.Point( 150+(Math.random()*700),1000 ) );
            this.bossbeam8.setPosition(new cc.Point( 150+(Math.random()*700),1000 ) );
            this.bossbeam9.setPosition(new cc.Point( 150+(Math.random()*700),1000 ) );
            this.bossbeam10.setPosition(new cc.Point( 150+(Math.random()*700),1000 ) );

        }


        if(this.hero.y >=400){

            this.bossbeam1.setPosition(new cc.Point( 150+(Math.random()*700),-1000 ) );
            this.bossbeam2.setPosition(new cc.Point( 150+(Math.random()*700),-1000 ) );
            this.bossbeam3.setPosition(new cc.Point( 150+(Math.random()*700),-1000 ) );
            this.bossbeam4.setPosition(new cc.Point( 150+(Math.random()*700),-1000 ) );
            this.bossbeam5.setPosition(new cc.Point( 150+(Math.random()*700),-1000 ) );
            this.bossbeam6.setPosition(new cc.Point( 150+(Math.random()*700),-1000 ) );
            this.bossbeam7.setPosition(new cc.Point( 150+(Math.random()*700),-1000 ) );
            this.bossbeam8.setPosition(new cc.Point( 150+(Math.random()*700),-1000 ) );
            this.bossbeam9.setPosition(new cc.Point( 150+(Math.random()*700),-1000 ) );
            this.bossbeam10.setPosition(new cc.Point( 150+(Math.random()*700),-1000 ) );
            this.boss.y+=1;
        }

        if(this.bossbeam1.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.bossbeam2.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.bossbeam3.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.bossbeam4.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.bossbeam5.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.bossbeam6.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.bossbeam7.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.bossbeam8.closeTo(this.hero))
        {
            this.hero.dead();
        }
        if(this.Switch.closeTo(this.hero))
        {
            this.endPhaseOne();
            this.readyToClimbRound1 = true;
        }
        this.basicUpdate();
       
    },
    isAbleToClimb: function(  ){
        if(this.hero.x >690&&this.hero.x<710&&this.hero.y>380&&this.hero.y<420)
        {
            return true;
        }
        else if(this.hero.x >90&&this.hero.x<110&&this.hero.y>80&&this.hero.y<120 )
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
            cc.director.runScene( new Ending );
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
            cc.director.runScene( new StageBossScene() );
        }
    }

});
 var StageBossScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new StageBoss();
        layer.init();
        this.addChild( layer );
    }
});