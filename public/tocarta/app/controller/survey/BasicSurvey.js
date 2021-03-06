/**
 * @class TC.controller.survey.BasicSurvey
 * @extends Ext.app.Controller
 * 
 * The Basic Survey Controller
 * @description controls the basic survey, it display dishes, questions and comments
 */
Ext.define('TC.controller.survey.BasicSurvey', {
  extend: 'Ext.app.Controller',
  requires: ['TC.store.Comments'],
  config: {
  	routes: {
      'basicsurvey': 'loadSurvey'
    },
    views: [
    	'survey.basic.SurveyContainer',
    	'survey.basic.SurveyDishes',
    	'survey.basic.SurveyQuestions',
    	'survey.basic.SurveyComments'
    ],   
    refs: {
    	survey: 'survey-basic-container',
    	submitSurveyButton: 'survey-basic-container button',
    },
    control: {
    	survey: { show: 'showSurvey' },
    	submitSurveyButton: { tap: 'submitSurvey' }
    }
  },
  
  launch: function(){
  	console.log('TC.controller.BasicSurvey.launch');
  },
  
  submitSurvey: function(){
  	console.log('TC.controller.BasicSurvey.submitSurvey');
  	var me = this;
		$tc.confirmMsg($T.send_survey_question,function(btn){
			if(btn=="yes"){
				Ext.Viewport.setMasked({xtype: 'loadmask',message: $T.send_survey_loading});
				var comments_to_send = Ext.create('TC.store.Comments',{
					proxy: {
						type: $tc.protocol,
						url: $tc.url('submit_survey') + '?key=' + TC.Setting.get('key'),
						writer: {
			    		type: 'json',
			    		root: 'survey'
			    	}
					}
				});
				// get the name of the user
				var userName = $j('.tcSurveyContainer .userInputNameField:last').val();
				// get rating of all survey questions
				$j('.tcSurveyContainer .survey_question').each(function(){
					var question_id = this.id.split("survey_question_")[1];
					var rating = $j(this).find('.star.selected').length;
					if(rating>0){
						var comment = Ext.create('TC.model.Comment',{
							survey_question_id: question_id,
							rating: rating,
							name: userName
						});
						comments_to_send.add(comment);
					}
				});
				// get rating and comments of all dishes
				$j('.tcSurveyContainer .dish_eaten').each(function(){
					var dish_id = this.id.split("dish_eaten_")[1];
					var rating = $j(this).find('.star.selected').length;
					var dish_comment = $j(this).find('.survey_dish_comment').val();
					if(rating>0){
						var comment = Ext.create('TC.model.Comment',{
							dish_id: dish_id,
							rating: rating,
							description: dish_comment,
							name: userName
						});
						comments_to_send.add(comment);
					}
				});
				// get restaurant's experience
				var restaurant_comment = $j('.tcSurveyGeneralComment:last').val();
				if(restaurant_comment.length > 0){
					var comment = Ext.create('TC.model.Comment',{
						name: userName,
						description: restaurant_comment
					});
					comments_to_send.add(comment);
				}
				
				// submit all comments now
				comments_to_send.sync();
				// say thank you and have a nice day
				setTimeout(function(){
					Ext.Viewport.unmask();
					$tc.alertMsg('<p align="center">'+$T.thanks_for_coming+'</p>',function(){
						me.redirectTo('mainmenu');
					});
				},3000);
			}
		});
  },
  
  showSurvey: function(survey){
  	console.log('TC.controller.BasicSurvey.showSurvey');
  	var me = this;
  	// setting order items and questions
  	survey.down('survey-dishes').setStore(TC.SentOrderItems);
  	// setting scrollbar visible if needed
  	var items = TC.SentOrderItems.getCount();
		if(items>4){
			$j(survey.down('survey-dishes').element.dom).find('.x-scroll-indicator-dark.x-scroll-indicator.x-scroll-indicator-x').css('opacity','0.5 !important');
		}
  	
  	// setting placeholders
  	$j('.tcSurveyDishes .survey_dish_comment').each(function(){
  		var placeholder = $j(this).attr('placeholder');
  		$j(this).watermark(placeholder, {fallback: false});
  	});
  	
  	TC.Restaurant.survey_questions().add(TC.Restaurant.data.survey_questions);
  	survey.down('survey-questions').setStore(TC.Restaurant.survey_questions());
  	
  	// lets bind stuff
  	$z(document).on($tc.click, '.tcSurveyContainer .rating .star', me.rate);
  	$z(document).on($tc.click, '.tcSurveyContainer .survey_question .x-segmentedbutton .x-button', me.selectAnswer);
  },
  
  selectAnswer: function(event,a,b){
  	console.log('TC.controller.BasicSurvey.selectAnswer');
  	var selectedOption = event.target;
		var selectedClass = 'x-button-pressed';
		$j(selectedOption).addClass(selectedClass);
  	$j(selectedOption).siblings().removeClass(selectedClass);
  },
  
  rate: function(event,a,b){
  	console.log('TC.controller.BasicSurvey.rate');
  	var star = event.target;
		var selectedClass = 'selected';
		$j(star).addClass(selectedClass);
		var prevStar = $j(star).prev();
		while(prevStar.length>0){
			prevStar.addClass(selectedClass);
			prevStar = $j(prevStar).prev();
		}
		var nextStar = $j(star).next();
		while(nextStar.length>0){
			nextStar.removeClass(selectedClass);
			nextStar = $j(nextStar).next();
		}
  },
  
  loadSurvey: function(){
  	console.log('TC.controller.BasicSurvey.loadSurvey');
  	TC.switchView({xtype: 'survey-container'});
  }
  
});
