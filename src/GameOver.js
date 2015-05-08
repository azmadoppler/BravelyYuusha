var GameOver = cc.LayerColor.extend({
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
    }
});





var GameOverScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});