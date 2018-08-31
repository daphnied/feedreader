/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* Some test may require DOM elements.
 * This ensures they don't run until the DOM is ready.
 */
$(function() {
  /* This is the first test suite - for RSS feeds definition
   * This suite is all about the RSS
   */
  describe('RSS Feeds', function() {
      /* This is the first test - it tests to make sure that the
       * allFeeds variable has been defined and that it is not
       * empty.
       */
      it('feeds are defined', function() {
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });


      /* A test that loops through each feed
       * in the allFeeds object and ensures it has a URL defined
       * and that the URL is not empty.
       */
      it('has a URL defined and not empty', funtion()) {
        for (feed of allFeeds) {
          expect(feed.url).toBeDefined();
          expect(feed.url.length).not.toBe(0);
        }
      });


    /* A test that loops through each feed
     * in the allFeeds object and ensures it has a name defined
     * and that the name is not empty.
     */
    it('has a name defined and not empty', function() {
      for (feed of allFeeds) {
        expect(feed.name).toBeDefined();
        expect(feed.name.length).not.toBe(0);
      }
    });
  });


/* A new test suite named "The menu" */

describe('The menu', function() {
  let body = document.getElementByTagName('body')[0];
  /*  };  ? */

  /* A test that ensures the menu element is
   * hidden by default. The menu visibility is determine by <body> 'menu-hidden' class.
   The test check if menu is present in <body> by default to hide menu.
   */

  it('is hidden by default', function() {
    expect(body.classList.contains('menu-hidden')).toBe(true);
  });
  /* A test that ensures the menu changes
   * visibility when the menu icon is clicked. This test
   * includes two expectations: does the menu display when
   * clicked and does it hide when clicked again.
   */
  it('change visibility when the icon is clicked', function() {
    let menuIcon = document.getElementByClassName('menu-icon-link')[0];

    menuIcon.click();
    expect(body.classList.contains('menu-hidden')).toBe(false);

    menuIcon.click();
    expect(body.classList.contains('menu-hidden')).toBe(true);
  });
});

/* A test suite named "Initial Entries" to check if
single entries are loaded properly in HTML */
describe('Initial Entries', function() {

});


/* A test that ensures when the loadFeed
 * function is called and completes its work, there is at least
 * a single .entry element within the .feed container.
 * NOTE: loadFeed() is asynchronous so this test will require
 * the use of Jasmine's beforeEach and asynchronous done() function.
 */
beforeEach(function(done) {
  loadFeed(0, done);
});

it('are loaded within the .feed container', function() {

  let feedEntries = document.querySelector('.feed').querySelectorAll('.entry');
  expect(feedEntries.length).toBeGreaterThan(0);
});
});

/* A test suite named "New Feed Selection" */
describe('New Feed Selection', function() {
  let Feed_01;
  let Feed_02;

  beforEach(function(done) {
    loadFeed(0, function() { //Load 1st new feeds set

      Feed_01 = document.getElementByClassName('feed')[0].innerHTML;
      loadFeed(1, function() { //Load 2nd new feeds set

        Feed_02 = document.getElementByClassName('feed')[0].innerHTML;
        done();

      });

    });
  });
});

/* A test that ensures when a new feed is loaded
 * by the loadFeed function that the content actually changes.
 * NOTE:  loadFeed() is asynchronous.
 */
it('is correctly loaded within .feed container', function() {
expect(Feed_02).not.toEqual(Feed_01);
});
});
}());
