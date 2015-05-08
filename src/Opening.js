var Opening = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
    
        this.bg = new Background();
        this.bg.initWithFile('res/images/opening.jpg');
        this.bg.setPosition( 400 , 300);
        this.addChild(this.bg);
        this.play = false;
        this.stage =1;
        this.scheduleUpdate();
        this.addKeyboardHandlers();
        cc.audioEngine.playMusic( 'res/images/ost.mp3' , true);
       
    },
    update: function(){
        if(this.play == true&&this.stage ==1)
        {
            cc.director.runScene( new StageZero() );
        }
        else if(this.stage == 2 && this.play ==true ){
            cc.director.runScene( new TutorialScene() );
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
            this.play = true;
        }
        else if ( e== cc.KEY.down  )
        {
            this.stage =2;
            this.bg.initWithFile('res/images/opening2.jpg');
        } 
        else if (  e==cc.KEY.up )
        {
            this.stage=1;
            this.bg.initWithFile('res/images/opening.jpg');
        }

    },
    onKeyUp: function( e ) 
    {
       

    }

});
var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new Opening();
        layer.init();
        this.addChild( layer );
    }
});