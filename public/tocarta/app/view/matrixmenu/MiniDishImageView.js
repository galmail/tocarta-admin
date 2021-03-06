/**
 * @class TC.view.matrixmenu.MiniDishImageView
 * @extends Ext.Container
 *
 * Menu Panel ItemsView
 *
 **/

Ext.define('TC.view.matrixmenu.MiniDishImageView', {
	extend : 'Ext.Container',
	requires: [ 'TC.store.Dishes' ],
	xtype : 'matrixmenu-minidishimageview',
	
	config : {
		cls: 'tcMatrixMenuMiniDishImageView',
		layout: 'vbox',
		listeners: {
			initialize: 'onInitialize',
		},
		
		items:[
		{
			xtype: 'container',
			tpl: '<img src="{mini_photo_url}" />',
			cls: 'dish-image',
		},
		{
			xtype: 'container',
			tpl: new Ext.XTemplate(
					'<div class="dish-name"><p>{name}</p></div>',
					'<div class="dish-price"><p>{price}&euro;</p></div>'
			),
			cls: 'dish-info'
		}],
		
	},
	
	onInitialize: function()
	{
		var me = this;
		
		/* Data hierarchy */
		this.getItems().each(function(item)
		{
			item.setData(me.getData()[0].data);
		});
	}
	
	

});
