/* All of the tests are placed within the $() function,
 * since some of these tests may require DOM elements, ensuring
 *  they don't run until the DOM is ready.
 */

$(function() {

    /* This is the first test suite, it is all about the RSS
    * feeds definitions, the allFeeds variable in the application.
    */

    describe('RSS Feeds', function() {

        /* This is the first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        
        it('has a URL', function() {
           for(const feed of allFeeds) { 
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
                expect(feed.url).toMatch( /^(http|https):\/\// );
           };
        });

        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        it('has a name', function() {
            for(const feed of allFeeds) { 
                 expect(feed.name).toBeDefined();
                 expect(feed.name.length).not.toBe(0);
            };
         });
    });


    // This test suite is all about the menu

    describe('The menu', function() {
        const body = document.querySelector('body');

        /* This test ensures the menu element is
         * hidden by default.
         */

        it('is hidden by default', function() {
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. The menu display shows when
          * clicked and hides when clicked again.
          */

         it('is shown when menu display is clicked', function() {
            const menuLink = document.querySelector('.menu-icon-link');
            menuLink.click();
                expect(body.classList.contains('menu-hidden')).toBe(false);
            menuLink.click();
                expect(body.classList.contains('menu-hidden')).toBe(true);
         });

    });

    // This test suite is about the Initial Entries

    describe('Initial Entries', function() {
        const feedIndex = 0;
        const articleTitle = document.querySelector('.header-title');
  
        beforeEach(function(done) {
           loadFeed(feedIndex, function() {
              done();
           });
        });
  
        /* This test that ensures when the loadFeed
         * functions are called and completes its work, there is at least
         * a single .entry element within each of the .feed container.
         */

        it('has at least a single entry in feed container', function(done) {
           const articles = document.querySelector('.entry');
            
           expect(articles).toBeDefined();
           expect(articles.length).not.toBe(0);
  
           done();
        });
     });
    
    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}())
