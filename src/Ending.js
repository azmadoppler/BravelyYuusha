var EndingScene = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
    
        this.bg = new Background();
        this.bg.initWithFile('res/images/end_cutscene1.png');
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
            this.bg.initWithFile('res/images/end_cutscene2.png');
        }
        else if(this.run == true && this.scene == 2){
            this.run = false;
            this.scene = 3;
            this.bg.initWithFile('res/images/end_cutscene3.png');

        }
        else if(this.run == true && this.scene == 3){
            this.run = false;
            this.scene = 4;
            this.bg.initWithFile('res/images/end_cutscene4.png');

        }
        else if(this.run == true && this.scene == 4){
            this.run = false;
            this.scene = 5;
            this.bg.initWithFile('res/images/end_cutscene5.png');

        }
        else if(this.run == true && this.scene == 5){
            this.run = false;
            this.scene = 6;
            this.bg.initWithFile('res/images/end_cutscene6.png');

        }
        else if(this.run == true && this.scene == 6){
            this.run = false;
            this.scene = 7;
            this.bg.initWithFile('res/images/end_cutscene7.png');
        }
        else if(this.run == true && this.scene == 7){
            this.run = false;
            this.scene = 8;
            this.bg.initWithFile('res/images/end_cutscene8.png');

        }
        else if(this.run == true && this.scene == 8){
            this.run = false;
            this.scene = 9;
            this.bg.initWithFile('res/images/end_cutscene9.png');

        }
        else if (this.run == true && this.scene == 9){
            cc.director.runScene(new StartScene());
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
var Ending = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new EndingScene();
        layer.init();
        this.addChild( layer );
    }
});