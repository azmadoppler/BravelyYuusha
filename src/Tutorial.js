var Tutorial = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
    
        this.bg = new Background();
        this.bg.initWithFile('res/images/howtoplay.png');
        this.bg.setPosition( 400 , 300);
        this.addChild(this.bg);
        this.scheduleUpdate();
        this.addKeyboardHandlers();
       
    },
    update: function(){

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
    	if ( e == cc.KEY.enter )
        {
            cc.director.runScene(new StageZero);   
        }

    },
    onKeyUp: function( e ) 
    {
       

    }

});
var TutorialScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new Tutorial();
        layer.init();
        this.addChild( layer );
    }
});
