describe('jQuery.styleWords', function() {
  var frag;

  beforeEach(function() {
    frag = $(readFixtures('fragment.html'));
  });

  it('should be available on the jQuery object', function() {
    expect($.fn.styleWords).toBeDefined();
  });

  it('should be chainable', function() {
    expect( frag.styleWords() ).toBe(frag);
  });

  it('should wrap a specified number of words within a span tag', function() {
    frag.styleWords();
    expect(frag.find('span').length).toEqual(1);
  });

  it('defaults to wrapping only one word', function() {
    frag.styleWords();
    expect(frag.find('span').text()).toEqual('Lorem');
  });

  it('allows the user to specify the number of words to wrap in the span', function() {
    frag.styleWords(3);
    expect(frag.find('span').text()).toEqual('Lorem ipsum dolor');
  });

  it('offers a default object on the styleWords namespace', function() {
    expect($.fn.styleWords.defaults).toBeDefined();
  });

  it('should apply a default class of \'styleWords\' to the wrapper', function() {
    frag.styleWords();
    expect(frag.find('span')).toHaveClass('styleWords');
  });

  it('allows the user to override the defaults', function () {
    frag.styleWords(2, {
      'class': 'some_class',
      tag: '<strong>'
    });

    expect(frag.find('strong').length).toEqual(1);
    expect(frag.find('strong').text()).toEqual('Lorem ipsum');
    expect(frag.find('strong')).toHaveClass('some_class');
  });
});

