$(document).ready(function(){
	window.guy = new App.Models.guy({name: 'first model!'});
	var foo = new App.Views.mainPage({model: guy})
	foo.render();
})

App = {
	Views : {
		mainPage: Backbone.View.extend({
			initialize: function() {
				_.bindAll(this);
				this.model.bind('change', this.render);
			},
			tagName: 'h3',
			render: function() {
				attrs = this.model.toJSON();
				parent = $("#main");
				html = $('<div>'+attrs.name+'</div>');
				output = this.$el.html(html);
				parent.empty().html(output);
			}
		})
	},
	Models : {
		guy: Backbone.Model.extend({
			initialize: function() {
				console.log('init');
			}
		})
	}
}