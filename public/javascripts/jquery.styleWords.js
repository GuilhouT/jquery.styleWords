(function($) {
  var styleWords = {
    init: function(el, num_words, config) {
      this.num_words = num_words || 1;
      this.config = $.extend({}, $.fn.styleWords.defaults, config);

      this.el = el;
      this.$el = $(el);

      this.updateHTML();
    },

    updateHTML: function() {
      var self = this;
      this.$el.html(function(i, text) {
        return self.createWrapper(text);
      });
      return this;
    },

    createWrapper: function(text) {
      var words = text.split(' ');
      // Wrap the first word in a span
      var wrapper = $(this.config.tag, {
        'class': this.config.class
      }).text(words.splice(0, this.num_words).join(' '));
      // (X-browser)
      wrapper = $('<div>').append(wrapper).html();

      return [wrapper].concat(words).join(' ');
    }
  };

  $.fn.styleWords = function(num_words, config) {
    var obj = Object.create(styleWords);
    return this.each(function() {
      obj.init(this, num_words, config);
    });
  };

  $.fn.styleWords.defaults = {
    tag: '<span>',
    'class': 'styleWords'
  };
})(jQuery);
