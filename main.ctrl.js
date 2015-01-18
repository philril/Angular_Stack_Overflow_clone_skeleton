angular.module('app').controller("MainController", function(){
    var vm = this;

    vm.title = "Maintainable Javascript Thunder Talk, Dogg!!!!";

    vm.teamname = "Team DBC Thunder:";

    vm.teammembers = "Devin Liu, Kevin Maze, Phil Riley, Joe Zuickes, Sean Marman";

    vm.searchInput = '';

    vm.questions = [
      {
        title: "WTF Rails?!?",
        content: "WHY!?!?!??"
      },
      {
        title: "How do I do Angular something something?",
        content: "Fingerstache ugh deep v banh mi. Meditation heirloom sriracha, seitan McSweeney's artisan chambray farm-to-table PBR sartorial YOLO actually cold-pressed freegan bitters."
      },
      {
        title: "What's the best JavaScript blah blah blah",
        content: "Meh master cleanse keytar disrupt. Kitsch before they sold out Carles, butcher Shoreditch tattooed swag sartorial. Pork belly normcore stumptown, Brooklyn four dollar toast XOXO polaroid."
      },
      {
        title: "How does Rails rabble rabble rabble?",
        content: "XOXO asymmetrical crucifix, master cleanse hella cred messenger bag stumptown wolf roof party try-hard. Whatever Shoreditch lumbersexual vegan, hashtag ugh tousled. Semiotics Thundercats Bushwick chillwave."
      },
      {
        title: "Why does Angular blahdy-blah??",
        content: "Twee pour-over tofu McSweeney's, organic Wes Anderson swag fingerstache chillwave vegan gentrify."
      },
      {
        title: "What's the deal with Angular's hooyah bullshit??",
        content: "Heirloom Pitchfork raw denim gastropub. American Apparel blog organic, Portland distillery tilde food truck keffiyeh fixie cornhole heirloom Pinterest."
      }
    ];

    vm.orders = [
      {
        id: 1,
        title: 'Title Ascending',
        key: 'title',
        reverse: false
      },
      {
        id: 2,
        title: 'Title Descending',
        key: 'title',
        reverse: true
      }
    ];

    vm.new = {};
    vm.addQuestion = function() {
        vm.questions.push(vm.new);
        vm.new = {};
    };
});