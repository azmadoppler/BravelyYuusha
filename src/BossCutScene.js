var BossCutSceneLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
    
        this.bg = new Background();
        this.bg.initWithFile('res/images/boss_cutscene1.png');
        this.bg.setPosition( 400 , 300);
        this.addChild(this.bg);
        this.scheduleUpdate();
        this.addKeyboardHandlers();
        this.scene = 1;
        this.run = false;
       
    },
    update: function(){
        if(this.run == true&&this.scene == 1){
            this.run = false;
            this.scene = 2;
            this.bg.initWithFile('res/images/boss_cutscene2.png');
        }
        else if(this.run == true && this.scene == 2){
            this.run = false;
            this.scene = 3;
            this.bg.initWithFile('res/images/boss_cutscene3.png');

        }
        else if (this.run == true && this.scene == 3){
            cc.director.runScene(new StageBossScene());
        }
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
    	if ( e == cc.KEY.space )
        {
            this.run = true;
        }

    },
    onKeyUp: function( e ) 
    {
       

    }

});
var BossCutScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new BossCutSceneLayer();
        layer.init();
        this.addChild( layer );
    }
});
