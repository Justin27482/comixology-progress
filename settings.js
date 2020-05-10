/* Settings */
var defaultUsername="ComicFan"; /* This is the username that shows when Ubooquity isn't set to use accounts. */
var defaultSearch="comics"; /* Set to "comics" or "books". Only applies to pages outside of /comics/ or /books/ (homepage, files, mobile, my books). */
var comicsBaseID=null; /* Set to null to disable publisher page. */
var featuredPublishers=["DC Comics","Marvel","Image","IDW Publishing","Dark Horse Comics", "Vertigo"]; /* set to null to disable Featured publisher list */
var booksBaseID=null; /* Set to null to disable author page. */
var storyArcID=null; /* Set to null to disable story arc functions. */
var seriesID=null; /* Set to null to disable series functions. */
var homepageIssues=30; /* Number of issues to display in homepage sliders (in Latest/Random Comics/Books). */
var maxPages=20; /* Maximum number of pages to look for items (ie. Featured publishers), 20 should be plenty for most cases */
var showRandom=true; /* Show Random Comics/Random Books sliders on homepage. */
var registerLink=false; /* Include register link on login form (currently broken since there's no method for import, leave disabled).*/
var hideCoverList=true; /* Remove table of alternate covers from comic descriptions. */
var weirdIssueNumbers=["001.MU","034.DC"]; /* Weird comic numbering cases too weird to parse automatically. */
var bookmarkConfirm=false; /* Popup an alert when you bookmark something. */
var showBookCount = false; /* Show number of books/issues in folder subtitle. */
var showComicIssueTitle = false; /* Show issue title on comic details page. */
var hideSocialLinks = false; /* Hide non-functional social share bar on book details and series/arc pages. */
var useSimpleArcTemplate = true; /* Use more Comixology-like template for series/story arc pages (doesn't have bookmark button). */
var audiobookShare=null /* Name of share in Files is used for audiobooks. Set to null (not "null") to disable. */
var autoPlayAudiobooks = false; /* Automatically start playing the first track of an audiobook when loaded. */

/* Ubooquity settings not available in API (Set these to match your Ubooquity settings manually) */
var bookmarkUsingCookies=false; /* Store bookmarks in cookies instead of the server */
var displayTitleInsteadOfFileName=false; /* Display title from metadata instead of file name */