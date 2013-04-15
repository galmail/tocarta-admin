/**
 * @class TC.controller.Main
 * @extends Ext.app.Controller
 * 
 * The Main Controller of the App
 */
Ext.define('TC.controller.Main', {
    extend: 'Ext.app.Controller',
    requires: ['TC.store.OrderItems','TC.model.Order','TC.model.Setting'],
    config: {
      //profile: Ext.os.deviceType.toLowerCase(),  // tablet or phone
      
      routes: {
        '': 'loadApp',
        'mainmenu': 'loadMainMenu',
        'dailymenu': 'loadDailyMenu',
        'matrixmenu': 'loadMatrixMenu',
        'home': 'goToHome'
      },
      
      views: [
	      'Viewport',
	      'help.HelpView',
	      'filter.FilterView',
	      'order.OrderView',
	      'mainmenu.MainMenu',
	      'dailymenu.DailyMenu',
	      'matrixmenu.MatrixMenu',
	    ],
	    
	    refs: {
	    	viewport: 'viewport',
	    	orderView: 'order-view',
	    	helpView: 'help-view',
	    	filterView: 'filter-view',
	    	topToolbar: 'top-toolbar',
	    	homeButton: 'top-toolbar #tcHomeBtnId',
	    	switchLanguageButton: 'top-toolbar #tcSwitchLanguageBtnId',
	    	switchMenuButton: 'top-toolbar #tcSwitchMenuBtnId',
	    	filterButton: 'top-toolbar #tcFilterBtnId',
	    	showOrderButton: 'top-toolbar #tcShowOrderBtnId',
	    	requestBillButton: 'top-toolbar #tcRequestBillBtnId',
	    	callWaiterButton: 'top-toolbar #tcCallWaiterBtnId',
	    	gamesButton: 'top-toolbar #tcGamesBtnId',
	    	bottomToolbar: 'bottom-toolbar',
	    	helpButton: 'bottom-toolbar #tcHelpBtnId',
	    	loadAppButton: 'bottom-toolbar #tcLoadAppBtnId',
	    	updateAppButton: 'bottom-toolbar #tcUpdateAppBtnId',
	    	switchTableButton: 'bottom-toolbar #tcSwitchTableBtnId',
	    	showSurveyButton: 'bottom-toolbar #tcShowSurveyBtnId'
	    },
	    
	    control: {
	    	viewport: { initialize: 'loadApp', reload: 'reloadViewport' },
	    	topToolbar: { reload: 'reloadTopToolbar' },
	      homeButton: { tap: 'goToHome' },
	      helpButton: { tap: 'showHelp' },
	      showOrderButton: { tap: 'showOrder' },
	      requestBillButton: { tap: 'requestBill' },
	      callWaiterButton: { tap: 'callWaiter' },
	      gamesButton: { tap: 'playGames' },
	      loadAppButton: { tap: 'loadApp' },
	      updateAppButton: { tap: 'updateApp' },
	      switchTableButton: { tap: 'switchTable' },
	      showSurveyButton: { tap: 'showSurvey' },
	      switchLanguageButton: { tap: 'switchLanguageView' },
	      switchMenuButton: { tap: 'switchMenu' },
	      filterButton: { tap: 'showFilterOptions' },
	    }
    },
    
    init: function(){
    	console.log('TC.controller.Main.init');
    	$tc.translateSTButtons();
    	var me = this;
    	// register functions
    	TC.switchView = this.switchView;
    	TC.showMsg = this.showMsg;
    	TC.ajaxRequest = this._ajaxRequest;
    	TC.validateLicenseKey = this.validateLicenseKey;
    	TC.model.Setting.load(1,{
    		scope: this,
    		failure: function(record,operation){
    			if(!TC.Setting){
    				TC.Setting = Ext.create('TC.model.Setting',{
	    				id: 			1,
	    				table: 		$tc.currentTable,
	    				language: $tc.defaultLanguage
	    			});
    			}
    			TC.Setting.save(function(){
    				me.validateLicenseKey();
    			});
    		},
    		success: function(record,operation){
    			// loaded ok
    			TC.Setting = record;
    			if(TC.Setting.get('key')==null){
    				me.validateLicenseKey();
    			}
    		},
    		callback: function(record,operation){
    			if(!TC.LastOrder){
    				TC.LastOrder = Ext.create('TC.model.Order',{
	    				id: 			1,
	    				table: 		TC.Setting.get('table'),
	    				language: TC.Setting.get('language')
	    			});
    			}
    		}
    	});
    },
    
    launch: function(){
    	console.log('TC.controller.Main.launch');
    	// this._updateOrderBadge();								// updates the order badge when needed
    	// this._check_for_incoming_messages();		// check for incoming messages
    	// this._bindTranslations();
    },
    
    reloadViewport: function(){
    	console.log('TC.controller.Main.reloadViewport');
    	if(TC.Restaurant.get('bg')!=null)
    		this.getViewport().down('viewport').element.setStyle('background','url("'+TC.Restaurant.get('bg_url')+'")');
    	if(TC.Restaurant.getMainMenu() && TC.Restaurant.getMainMenu().get('stylesheet'))
    		$tc.loadStylesheet(TC.Restaurant.getMainMenu().get('stylesheet_url'));
    	if(TC.Restaurant.getDailyMenu() && TC.Restaurant.getDailyMenu().get('stylesheet'))
    		$tc.loadStylesheet(TC.Restaurant.getDailyMenu().get('stylesheet_url'));
    },
    
    reloadTopToolbar: function(){
    	console.log('TC.controller.Main.reloadTopToolbar');
    	this.getTopToolbar().setTitle('<img id="tcTopToolbarLogoId" src="'+ TC.Restaurant.get('logo_url') +'"/>');
    	if(TC.Restaurant.data.setting!=null){
    		this.getTopToolbar().down('#tcSwitchMenuBtnId').setHidden(!TC.Restaurant.getDailyMenu());
    		this.getTopToolbar().down('#tcGamesBtnId').setHidden(!TC.Restaurant.data.setting.games);
    		this.getTopToolbar().down('#tcFilterBtnId').setHidden(!TC.Restaurant.data.setting.show_filters);
    		this.getTopToolbar().down('#tcSwitchLanguageBtnId').setHidden(TC.Restaurant.data.setting.supported_lang.length<3);
	    	this.getTopToolbar().down('#tcCallWaiterBtnId').setHidden(!TC.Restaurant.data.setting.call_waiter_button);
	    	this.getTopToolbar().down('#tcRequestBillBtnId').setHidden(!TC.Restaurant.data.setting.request_bill_button);
	    	this.getTopToolbar().down('#tcShowOrderBtnId').setHidden(!TC.Restaurant.data.setting.order_button);
    	}
    },
    
    validateLicenseKey: function(){
    	console.log('TC.controller.Main.validateLicenseKey');
    	var me = this;
  		Ext.Msg.prompt('',$TO.enter_license_key,function(btn,key){
  			if(btn=="ok" && key.length > 0){
  				Ext.Viewport.setMasked({xtype: 'loadmask',message: $TO.validating_license_key});
  				TC.Setting.validateKey(key,function(ok){
  					Ext.Viewport.unmask();
  					if(!ok){
  						me.validateLicenseKey();
  					}
  					else {
  						me.redirectTo('update');
  					}
  				});
  			}
  			else {
  				me.validateLicenseKey();
  			}
  		});
    },
    
    showMsg: function(msg,msgType){
    	console.log('TC.controller.Main.showMsg');
    	var _msg = msg || '';
    	var _msgType = msgType || 'info';
    	var msgToolbar = Ext.Viewport.down('#tcMsgToolbarId');
    	msgToolbar.setData({msg: _msg, msgType: _msgType});
    	msgToolbar.showMessage();
    	$tc.lastMsg = new Date().getTime();
    	setTimeout(function(){
    		if(new Date().getTime()-$tc.lastMsg >= $tc.time_to_display_msg)
    			msgToolbar.hideMessage();
    	},$tc.time_to_display_msg);
    },
    
    switchLanguageView: function(){
    	console.log('TC.controller.Main.switchLanguageView');
    	this.redirectTo('multilang');
    },
    
    goToHome: function(){
    	console.log('TC.controller.Main.goToHome');
    	
    	this._updateOrderBadge();								// updates the order badge when needed
    	this._check_for_incoming_messages();		// check for incoming messages
    	this._bindTranslations();
    	
    	
    	// TODO decide if home is the multilang or mainmenu
    	// if(TC.Restaurant.data.setting.supported_lang && TC.Restaurant.data.setting.supported_lang.length>2){
    		// this.redirectTo('multilang');
    	// }
    	// else {
    		this.redirectTo('mainmenu');
    	// }
    	
    },
    
    switchMenu: function(){
    	console.log('TC.controller.Main.switchMenu');
    	var xtype = Ext.Viewport.getActiveItem().getActiveItem().xtype;
    	if(xtype=="main-menu"){
    		this.redirectTo('dailymenu');
    	}
    	else {
    		this.redirectTo('mainmenu');
    	}
    },
    
    showFilterOptions: function(btn){
    	console.log('TC.controller.Main.showFilterOptions');
    	this.getFilterView().showBy(btn);
    },
    
    showHelp: function(){
    	console.log('TC.controller.Main.showHelp');
    	this.getHelpView().show();
    },
    
    showOrder: function(){
    	console.log('TC.controller.Main.showOrder');
    	this.getOrderView().showBy(this.getShowOrderButton());
    },
    
    loadApp: function(){
    	console.log('TC.controller.Main.loadApp');
    	if(TC.Setting.get('key')!=null){
    		this.redirectTo('load');
    	}
    	else {
    		this.validateLicenseKey();
    	}
    },
    
    updateApp: function(){
    	console.log('TC.controller.Main.updateApp');
    	this.redirectTo('update');
    },
    
    switchView: function(newView){
    	console.log('TC.controller.Main.switchView');
    	var viewport = Ext.Viewport.getActiveItem();
    	var oldItem = viewport.getActiveItem();
    	var newItem = newView;
    	if(typeof(newView)=='string'){
    		newItem = Ext.create(newView);
    	}
    	var _elems = viewport.items.keys.length;
    	viewport.add(newItem);
    	if(viewport.items.keys.length > _elems)
    		viewport.remove(oldItem);
		},
    
    showMainMenu: function() {
      console.log('TC.controller.Main.showMainMenu');
      this.redirectTo('mainmenu');
    },
    
    loadMainMenu: function(){
    	if(TC.Restaurant){
    		console.log('TC.controller.Main.loadMainMenu');
    		TC.app.getController("TC.controller.MainMenu").reset(); // reseting the entire controller menu
    		this.switchView({xtype: 'main-menu'});
    	}
    	else {
    		this.loadApp();
    	}
    },
    
    loadDailyMenu: function(){
    	if(TC.Restaurant){
    		console.log('TC.controller.Main.loadDailyMenu');
    		this.switchView({xtype: 'daily-menu'});
    	}
    	else {
    		this.loadApp();
    	}
    },
    
    loadMatrixMenu: function(){
    	if(TC.Restaurant){
    		console.log('TC.controller.Main.loadMatrixMenu');
    		this.switchView({xtype: 'matrix-menu'});
    	}
    	else {
    		this.loadApp();
    	}
    },
    
    switchTable: function(){
    	console.log('TC.controller.Main.switchTable');
    	if(!this.settingsView){
    		this.settingsView = Ext.create('TC.view.settings.SettingsView');
    		Ext.Viewport.add(this.settingsView);
    	}
    	this.settingsView.show();
    },
    
    showSurvey: function(){
    	console.log('TC.controller.Main.showSurvey');
    	this.redirectTo('survey');
    },
    
    requestBill: function(){
    	console.log('TC.controller.Main.requestBill');
    	var me = this;
    	// check if this table has sent orders
    	Ext.Viewport.setMasked({xtype: 'loadmask',message: $T.loading_order});
    	TC.SentOrderItems = Ext.create('TC.store.OrderItems',{
    		proxy: {
    			type: $tc.protocol,
    			url : $tc.url('get_sent_order_items') + '?key=' + TC.Setting.get('key')
    		}
    	}).load(function(records, operation, success){
    		Ext.Viewport.unmask();
    		if(success==false){
    			TC.showMsg($T.comm_error,'error');
    			return false;
    		}
    		if(records.length==0 && TC.Restaurant.data.setting.order_button){
    			TC.showMsg($T.order_before_bill_request,'info');
    			return false;
    		}
    		else {
    			$tc.confirmMsg($T.request_bill_question,function(btn){
		    		if(btn=="yes"){
		    			Ext.Viewport.setMasked({xtype: 'loadmask',message: $T.requesting_bill});
			    		me._checkOutTable(function(ok){
			    			Ext.Viewport.unmask();
			    			if(ok){
			    				TC.showMsg($T.waiter_bring_bill,'info');
			    				me.redirectTo('survey');
			    			}
			    			else {
			    				TC.showMsg($T.comm_error,'error');
			    			}
			    		});
		    		}
		    	});
    		}
    	});
    },
    
    callWaiter: function(callback){
    	console.log('TC.controller.Main.callWaiter');
    	$tc.confirmMsg($T.call_waiter_question,function(btn){
		  	if(btn=="yes"){
		  		Ext.Viewport.setMasked({xtype: 'loadmask',message: $T.call_waiter_loading});
		  		TC.ajaxRequest({
		    		url: $tc.url('call_waiter'),
		    		success: function(response){
		    			var res = Ext.decode(response.responseText);
		    			Ext.Viewport.unmask();
				    	if($j.isFunction(callback)){
				    		callback(res.result);
				    	}
				    	else {
				    		if(res.result){
				    			TC.showMsg($T.call_waiter_received,'success');
				    		}
				    		else {
				    			TC.showMsg($T.comm_error,'error');
				    		}
				    	}
				    },
				    failure: function(response){
				    	Ext.Viewport.unmask();
				    	if($j.isFunction(callback)){
				    		callback(false);
				    	}
				    	else {
				    		TC.showMsg($T.comm_error,'error');
				    	}
				    }
		    	});
		  	}
		  });
    },
    
    playGames: function(){
    	console.log('TC.controller.Main.playGames');
    },
    
    _checkOutTable: function(callback){
    	console.log('TC.controller.Main._checkOutTable');
	  	TC.ajaxRequest({
	  		url: $tc.url('request_bill'),
	  		success: function(response){
	  			var res = Ext.decode(response.responseText);
		    	if(res.result){
		    		// do checkout in background
		    		TC.ajaxRequest({url: $tc.url('checkout_table')});
		    	}
		    	callback(res.result);
		    },
		    failure: function(response) {
		    	callback(false);
		    }
	  	});
	  },
	  
	  _ajaxRequest: function(options){
	  	console.log('TC.controller.Main._ajaxRequest');
	  	var _params = Ext.apply({
	  		key: TC.Setting.get('key')
	  	},options.params);
	  	
	  	Ext.Ajax.request({
		    url: options.url,
		    method: 'GET',
		    params: _params,
		    success: function(response){
		    	if(response.status != 200){
		    		if(options.failure)
		    			options.failure(response);
		    	}
		    	else {
		    		if(options.success)
		    			options.success(response);
		    	}
		    },
		    failure: options.failure,
		    callback: options.callback,
		    timeout: $tc.timeout
			});
	  },
	  
	  _bindTranslations: function(){
	  	// var changeLang = function(event,lang){
	  		// var key = event.target.className.match(/t--[a-zA-Z0-9-]+/)[0].replace('t--','');
	  		// console.log(key);
	  		// console.log(event.target.innerHTML);
	  		// var locale = lang;
	  		// // TODO get value of key for that language
	  		// var value = key + '==' + locale;
	  		// event.target.innerHTML = value;
	  	// }
	  	
	  	
	  	// lets bind stuff
	  	// $(document).on('changeLanguage', '.i18n', function(event,lang){
	  		// console.log('language has changed...');
	  		// changeLang(event,lang);
	  	// });
// 	  	
	  	// $(document).on('load', '.i18n', function(event,lang){
	  		// console.log('i18n has loaded...');
	  		// changeLang(event,lang);
	  	// });
	  	
	  },
	  
    _updateOrderBadge: function(){
			console.log('TC.controller.MainMenu._updateOrderBadge');
			var me = this;
			TC.LastOrder.setListeners({
				adding_dish: function(){
					console.log('adding_dish received, updating badge.');
					var orderBtn = me.getTopToolbar().down('#tcShowOrderBtnId');
					if(orderBtn.getBadgeText()==null){
						orderBtn.setBadgeText("1");
						me.showOrder();
					}
					else {
						orderBtn.setBadgeText(parseInt(orderBtn.getBadgeText())+1);
					}
					me._fixBadgePosition(orderBtn);
				},
				removing_dish: function(){
					console.log('removing_dish received, updating badge.');
					var orderBtn = me.getTopToolbar().down('#tcShowOrderBtnId');
					var newBadge = parseInt(orderBtn.getBadgeText())-1;
					if(newBadge < 1){
						orderBtn.setBadgeText(null);
					}
					else {
						orderBtn.setBadgeText(newBadge);
						me._fixBadgePosition(orderBtn);
					}
				},
				clearing_order: function(){
					console.log('clearing_order received, updating badge.');
					var orderBtn = me.getTopToolbar().down('#tcShowOrderBtnId');
					orderBtn.setBadgeText(null);
				}
			});
		},
		
		_fixBadgePosition: function(orderBtn){
			console.log('TC.controller.MainMenu._fixBadgePosition');
			if(orderBtn.getBadgeText().toString().length > 1){
				$j(orderBtn.element.dom).find('.x-badge:first').css({right: '15px'});
			}
			else {
				$j(orderBtn.element.dom).find('.x-badge:first').css({right: '21px'});
			}
		},
		
		
		_check_for_incoming_messages: function(){
    	console.log('TC.controller.Main._check_for_incoming_messages');
    	var me = this;
    	
			// Enable pusher logging - don't include this in production
	    // Pusher.log = function(message) {
	      // if (window.console && window.console.log) window.console.log(message);
	    // };
	    // Flash fallback logging - don't include this in production
	    // WEB_SOCKET_DEBUG = true;
	    // start listening for incoming activities
	    
	    
	    /*
	    var pusher = new Pusher($tc.pusherKey);
	    var channel = pusher.subscribe('tocarta_lk_'+TC.Setting.get('key')+'_channel');
	    channel.bind('alive', function(data) {
	    	console.log('TC.controller.Main._check_for_incoming_messages received alive message');
	    	TC.ajaxRequest({
	  			url: $tc.url('im_alive')
	  		});
	    });
	    channel.bind('update', function(data) {
	    	console.log('TC.controller.Main._check_for_incoming_messages received update message');
	    	me.redirectTo('update');
	    });
	    */
	    
	    /* Listen to NodeJS Socket.io events */
	   	var endpoint = $tc.nodeserver;
	   	var pipe = 'tocarta_lk_'+TC.Setting.get('key')+'_channel';
			console.log("Connecting to "+endpoint);
		  var socket = io.connect(endpoint);
		  console.log("Listening on "+pipe);
		  socket.on(pipe, function (data) {
		  	if(data && data.action){
		  		console.log('TC.controller.Main._check_for_incoming_messages action: '+data.action);
		    	if(data.action=="alive"){
		    		TC.ajaxRequest({
			  			url: $tc.url('im_alive')
			  		});
		    	}
		    	else if(data.action=="update"){
		    		me.redirectTo('update');
		    	}
		  	}
		  });
    }
});