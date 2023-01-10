/*!
 This file is part of DecSoft App Builder.
 Visit our website for license information.
 Copyright ©2022 DecSoft Utils. All rights reserved.
 Visit our website at: https://www.decsoftutils.com
 */

Vue.config.silent = false;
Vue.config.devtools = true;
Vue.config.performance = false;

window.appFrames = {};


Vue.component("quoteoptions", function (resolve, reject) {
  jQuery.get("app/views/html/quoteoptions.html", function (response) {
    resolve({
      props: ["app"],
      template: response,
      data: function () {
        return {
          name: "quoteoptions",
          size: "xl",
          classes: "",
          event: null,
          button1: {
            name: "button1",
            classes: "",
            size: "sm",
            title: "",
            tabIndex: -1,
            text: "close",
            kind: "danger",
            outline: false,
            active: false,
            leftIcon: "",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.button1;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "button1" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

app.hideDialog('quoteoptions');

            },
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },
          idBtnMkCard: {
            name: "idBtnMkCard",
            classes: "bigbtn",
            size: "sm",
            title: "",
            tabIndex: -1,
            text: "",
            kind: "dark",
            outline: false,
            active: false,
            leftIcon: "fas fa-sticky-note",
            rightIcon: "",
            leftBadge: "",
            leftBadgeKind: "light",
            leftBadgePilled: false,
            rightBadge: "",
            rightBadgeKind: "light",
            rightBadgePilled: false,
            hidden: false,
            disabled: false,
            event: null,
            blurHandler: function () {},
            focusHandler: function () {},
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },
          label1: {
            name: "label1",
            classes: "",
            input: "",
            title: "",
            text: "Create Quote Card",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          }
        };
      },
      mounted: function () {
        var
          self = this;
        $("#quoteoptions").on("show.bs.modal", function () {
          var
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.internal.activeDialog = self;
          app._setViewEvents(self);

// Place here the Javascript code to be executed in the "Show" event of the "quoteoptions" app dialog
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

app.store.showinqoteopt = true;
        });
        $("#quoteoptions").on("hidden.bs.modal", function () {
          var
            view = self,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = null;
          app.internal.activeDialog = app._getActiveDialog();

// Place here the Javascript code to be executed in the "Hide" event of the "quoteoptions" app dialog
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

app.store.showinqoteopt = false;
        });
      },
      methods: {
        show: function () {
          $("#" + this.name).modal({backdrop: "static", keyboard: false});
        },
        hide: function () {
          $("#" + this.name).modal("hide");
        },
        clickHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
      }
    });
  });
});

window.appViews = {};

window.appViews.HomePage = Vue.component("HomePage", function (resolve, reject) {
  jQuery.get("app/views/html/HomePage.html", function (response) {
    resolve({
      props: ["app"],
      template: response,
      data: function () {
        return {
          name: "HomePage",
          classes: "",
          transitionName: "slideleft",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          idHTMLFeaturedOpts: {
            name: "idHTMLFeaturedOpts",
            classes: "appThemedScrollbar",
            title: "",
            hidden: false,
            event: null,
            swipeRightHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.idHTMLFeaturedOpts;
              self.event = event;

            },
            swipeLeftHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.idHTMLFeaturedOpts;
              self.event = event;

            },
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },
          html2: {
            name: "html2",
            classes: "",
            title: "",
            hidden: false,
            event: null,
            swipeRightHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.html2;
              self.event = event;

            },
            swipeLeftHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.html2;
              self.event = event;

            },
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          container1: {
            name: "container1",
            classes: "header",
            title: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          idMainTtl: {
            name: "idMainTtl",
            classes: "apptitle",
            input: "",
            title: "",
            text: "Yugen",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

        };
      },
      activated: function () {
        var
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
        app._setViewEvents(this);

// Place here the Javascript code to be executed in the "Show" event of the "view1" app view
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

//$('#listlink li').hide().fadeIn(400);

      },
      deactivated: function () {
        var
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
      }
    });
  });
});


window.appViews.Saved = Vue.component("Saved", function (resolve, reject) {
  jQuery.get("app/views/html/Saved.html", function (response) {
    resolve({
      props: ["app"],
      template: response,
      data: function () {
        return {
          name: "Saved",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          NavSaved: {
            name: "NavSaved",
            classes: "",
            title: "",
            hidden: false,
            event: null,
            swipeRightHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.NavSaved;
              self.event = event;

            },
            swipeLeftHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.NavSaved;
              self.event = event;

            },
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          container1: {
            name: "container1",
            classes: "header",
            title: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label1: {
            name: "label1",
            classes: "apptitle",
            input: "",
            title: "",
            text: "Saved",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

        };
      },
      activated: function () {
        var
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
        app._setViewEvents(this);

      },
      deactivated: function () {
        var
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

      },
      methods: {
        clickHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
      }
    });
  });
});


window.appViews.MoreInfo = Vue.component("MoreInfo", function (resolve, reject) {
  jQuery.get("app/views/html/MoreInfo.html", function (response) {
    resolve({
      props: ["app"],
      template: response,
      data: function () {
        return {
          name: "MoreInfo",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "fadeOutRight",
          event: null,
          idHTMLTextInfo: {
            name: "idHTMLTextInfo",
            classes: "QuoteWorld appThemedScrollbar text-center",
            title: "",
            hidden: false,
            event: null,
            swipeRightHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.idHTMLTextInfo;
              self.event = event;

            },
            swipeLeftHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.idHTMLTextInfo;
              self.event = event;

            },

            clickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.idHTMLTextInfo;
                self.event = event;


// Place here the Javascript code to be executed in the "Click" event of the "idHTMLTextInfo" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

//app.showDialog('quoteoptions');


            },

            dblclickHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.idHTMLTextInfo;
                self.event = event;


// Place here the Javascript code to be executed in the "DblClick" event of the "idHTMLTextInfo" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

$("#idHTMLTextInfo").append("<img class='heart-icon' src='app/images/favdblclick.svg'/>");
$('.heart-icon').addClass('animate-like');

  setTimeout(() => {
    //app.showToast('removing heart');
		$('.heart-icon').removeClass('animate-like');
    $('.heart-icon').remove();
	}, 1000);

/*
app.cordova.dialogs.confirm(
      'Successfully added to Favorites!',
      views.MoreInfo.label11.text,
      function (buttonIndex) {
        switch(buttonIndex){
            case 1:
   //return app.showDialog('dialogSrvConnection');
                break;
            case 2:
                app.replaceView('Favorites');
                break;
        }
      },
      ['Ok', 'Open Favorites']
  );
*/

            },
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},

            contextmenuHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.idHTMLTextInfo;
                self.event = event;


// Place here the Javascript code to be executed in the "ContextMenu" event of the "idHTMLTextInfo" visual native control
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

app.showDialog('quoteoptions');


            }
          },
          idHTMLInfoBtmNav: {
            name: "idHTMLInfoBtmNav",
            classes: "",
            title: "",
            hidden: false,
            event: null,
            swipeRightHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.idHTMLInfoBtmNav;
              self.event = event;

            },
            swipeLeftHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.idHTMLInfoBtmNav;
              self.event = event;

            },
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          container2: {
            name: "container2",
            classes: "header",
            title: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          label11: {
            name: "label11",
            classes: "apptitle",
            input: "",
            title: "",
            text: "More",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },

          idQuoteScreen: {
            name: "idQuoteScreen",
            classes: "QuoteWorld appThemedScrollbar text-center",
            input: "",
            title: "",
            text: "",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          }
        };
      },
      activated: function () {
        var
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
        app._setViewEvents(this);

// Place here the Javascript code to be executed in the "Show" event of the "MoreInfo" app view
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

views.MoreInfo.label11.text = app.store.selecteditm;

$('#reloadinf').removeClass('fa-spin');
$('#reloadbtn').removeClass('active');

$('#idHTMLInfoBtmNav').fadeIn(400);
$('#idHTMLTextInfo').fadeIn(400);

app.hideAlert();
//app.GenerateNew();
//$("#idHTMLTextInfo").append("<img class='heart-icon' src='app/images/favdblclick.svg'/>");
      },
      deactivated: function () {
        var
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

// Hide Quotebox to fade in on launch

$('#idHTMLInfoBtmNav').hide();
$('#idHTMLTextInfo').hide();
app.hideAlert();
      },
      methods: {
        clickHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

// Place here the Javascript code to be executed in the "SwipeLeft" event of the "MoreInfo" app view
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

app.GenerateNew();
        }
      }
    });
  });
});


window.appViews.Favorites = Vue.component("Favorites", function (resolve, reject) {
  jQuery.get("app/views/html/Favorites.html", function (response) {
    resolve({
      props: ["app"],
      template: response,
      data: function () {
        return {
          name: "Favorites",
          classes: "",
          transitionName: "",
          transitionMode: "",
          inAnimation: "",
          outAnimation: "",
          event: null,
          idHTMLFavView: {
            name: "idHTMLFavView",
            classes: "appThemedScrollbar",
            title: "",
            hidden: false,
            event: null,
            swipeRightHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.idHTMLFavView;
              self.event = event;

            },
            swipeLeftHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.idHTMLFavView;
              self.event = event;

            },
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },
          container1: {
            name: "container1",
            classes: "header",
            title: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },
          label1fav: {
            name: "label1fav",
            classes: "apptitle",
            input: "",
            title: "",
            text: "Favorites",
            leftIcon: "",
            rightIcon: "",
            hidden: false,
            event: null,
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          },
          idHTMLFavBtmNav: {
            name: "idHTMLFavBtmNav",
            classes: "",
            title: "",
            hidden: false,
            event: null,
            swipeRightHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.idHTMLFavBtmNav;
              self.event = event;

            },
            swipeLeftHandler: function (event) {
              var
                view = app._getCurrentView(),
                views = app._getLoadedViews(),
                frames = app._getLoadedFrames(),
                dialogs = app._getLoadedDialogs(),
                self = view.idHTMLFavBtmNav;
              self.event = event;

            },
            clickHandler: function () {},
            dblclickHandler: function () {},
            mouseupHandler: function () {},
            mousedownHandler: function () {},
            mousemoveHandler: function () {},
            mouseenterHandler: function () {},
            mouseleaveHandler: function () {},
            contextmenuHandler: function () {}
          }
        };
      },
      activated: function () {
        var
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;
        app._setViewEvents(this);

// Place here the Javascript code to be executed in the "Show" event of the "Favorites" app view
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

      },
      deactivated: function () {
        var
          view = this,
          self = this,
          views = app._getLoadedViews(),
          frames = app._getLoadedFrames(),
          dialogs = app._getLoadedDialogs();
        view.event = null;

// Place here the Javascript code to be executed in the "Hide" event of the "Favorites" app view
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

app.hideAlert();
      },
      methods: {
        clickHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        dblclickHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseupHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousedownHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mousemoveHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseenterHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        mouseleaveHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        contextmenuHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeRightHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        },
        swipeLeftHandler: function (event) {
          var
            view = this,
            self = this,
            views = app._getLoadedViews(),
            frames = app._getLoadedFrames(),
            dialogs = app._getLoadedDialogs();
          view.event = event;

        }
      }
    });
  });
});


Vue.filter('uppercase', function (value) {
  if (value) {
    value = value.toString();
    return value.toUpperCase();
  }
});

Vue.filter('lowercase', function (value) {
  if (value) {
    value = value.toString();
    return value.toLowerCase();
  }
});

window.appStore = new Vuex.Store({
  state: {}
});

window.app = new Vue({

  router: new VueRouter({routes: [
    
    { path: '/HomePage', alias: '*', name: 'HomePage', component: window.appViews.HomePage, props: function (route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/Saved', name: 'Saved', component: window.appViews.Saved, props: function (route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/MoreInfo', name: 'MoreInfo', component: window.appViews.MoreInfo, props: function (route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } },
    { path: '/Favorites', name: 'Favorites', component: window.appViews.Favorites, props: function (route) { app.query = $.isEmptyObject(route.query) ? false : route.query; } }
  ]}),

  created: function () {
    this._setupAppHtml();
    this._setupAppEvents();
    this._setupAppDialogs();
    this._setupAppVariables();
    this._setupAppPlugins();
    this._setupCordovaPlugins();
  },

  mounted: function () {
    window.app = this;
	$('body').addClass(this.theme);

    
  },

  data: function () {

    return {
      event: null,
      error: null,

      
      id: "com.theyugen.denniskabui",
      version: "1.0.0",
      name: "The Yugen",
      shortName: "The Yugen",
      description: "An awareness of the universe that triggers an emotional response too deep and mystical for words.",
      authorName: "Dennis Murage Kabui",
      authorEmail: "Dennis Murage Kabui",
      authorUrl: "",
      language: "en",
      languageName: "English",
      textDirection: "ltr",
      style: "scaled",
      buildNumber: 0,
      theme: "default",
      themes: ["default"],
      sidebar: {
        item: {
          index: -1,
          subindex: -1
        },
        header: "",
        direction: "left",
        headerKind: "none",
        headerAlign: "left",
        imageUrl: "",
        items: [],
        itemClickHandler: this._appEventOnSidebarItemClick,
        headerClickHandler: this._appEventOnSidebarHeaderClick
      },
      alert: {
        body: "",
        kind: "",
        title: "",
        buttons: [],
        closeCallback: function () {}
      },
      internal: {
        dialogs: [],
        lastSound: null,
        activeDialog: null,
        dabdialogs: [],
        defaultLanguage: "en",
      },
    };
  },

  computed: {
    
    store: function () {
      return window.appStore.state;
    },
    
    viewTransitionName: function () {
      return app._getCurrentView().transitionName !== '' ? 'name' : null;
    },
    
    viewTransitionMode: function () {
      return app._getCurrentView().transitionMode !== '' ? 'mode' : null;
    },
    
    viewInAnimation: function () {
      return app._getCurrentView().inAnimation !== '' ? 'enter-active-class' : null;
    },
    
    viewOutAnimation: function () {
      return app._getCurrentView().outAnimation !== '' ? 'leave-active-class' : null;
    }    
  },

  methods: {

    // Public app variables related methods

    setVar: function (varName, varValue) {
      this.$set(this.store, varName, varValue);
    },

    // Public app views related methods

    showView: function (viewName) {
      this.$router.push(viewName);
    },

    replaceView: function (viewName) {
      this.$router.replace(viewName);
    },

    // Public app dialogs related methods

    showDialog: function (dialogName) {
	  var modal = new bootstrap.Modal(window.document.getElementById(dialogName), {
        keyboard: false,
		backdrop: 'static'
      })
      modal.show();	  
    },

    hideDialog: function (dialogName) {
      var elem = window.document.getElementById(dialogName);
      var modal = bootstrap.Modal.getInstance(elem);
      modal.hide();		  
    },

    hideDialogs: function () {
	  var modals = window.document.querySelectorAll('.app-dialog.modal');
	  for (var i = 0; i < modals.length; i++) {
	    var modal = bootstrap.Modal.getInstance(modals[i]);
		modal.hide();
	  }
    },
	
	// Public app alert related methods
	
	showAlert: function (body, title, kind, buttons, closeCallback) {
		
      app.alert.kind = kind || '';
      app.alert.title = title || '';
      app.alert.body = body || '';
      app.alert.buttons = buttons || false;
      app.alert.closeCallback = closeCallback || function () {};		

	  var modal = new bootstrap.Modal(window.document.getElementById('dab-alert-modal'), {
        keyboard: false,
		backdrop: 'static'		  
	  });
	  var elem = window.document.getElementById('dab-alert-modal');
      elem.addEventListener('hidePrevented.bs.modal', function () {
		if (!app.alert.buttons || app.alert.buttons.length === 0) {
	      modal.hide();		  
		}  
      });
      modal.show(); 	
	},	
	
	hideAlert: function () {
	  var elem = window.document.getElementById('dab-alert-modal');	
	  var modal = bootstrap.Modal.getInstance(elem);
	  modal.hide();
	},
	
	// Public app sidebar related methods
	
	showSidebar: function () {
      $('#dab-sidebar').addClass('active');
      $('#dab-sidebar-overlay').addClass('active');		
	},
	
	hideSidebar: function () {
      $('#dab-sidebar').removeClass('active');
      $('#dab-sidebar-overlay').removeClass('active');		
	},	
	
 	sidebarIsVisible: function () {
      return $('#dab-sidebar').hasClass('active');		
	},
	
 	sidebarSetDirection: function (direction) {
	  if (app.sidebar.direction === direction) {
	    return app.sidebar.direction;	  
	  }		  
      app.sidebar.direction = direction;
      if (direction === 'right') {
        var 
          css = '#dab-sidebar { left: initial; right: -280px; }\
		         #dab-sidebar.active { left: initial; right: 0; }',
          style = document.createElement('style');
        document.head.appendChild(style);
        style.type = 'text/css';
	    style.id = 'sidebar-stylesheet';
        style.appendChild(document.createTextNode(css));		
	  } else {
	    if ($('#sidebar-stylesheet').length > 0) {
          $('#sidebar-stylesheet').remove();
		}	  
	  }
	  return app.sidebar.direction; 
	},	

    // Public app toasts related methods

    showToast: function (text, hideMsecs, kind, title,
     subtitle, clickCallback, dismissCallback, payload) {
      var
        toastId = this.randomStr(),
        toasts = this._getToastsComponent();
      toasts.toasts.push({
        "text": text,
        "id": toastId,
        "title": title || '',
        "kind": kind || 'light',
        "payload": payload || null,
        "subtitle": subtitle || '',
        "clickCallback": clickCallback || function () {},
        "dismissCallback": dismissCallback || function () {}
      });
      if (hideMsecs) {
        window.setTimeout(function () {
          for (var i in toasts.toasts) {
            if (toasts.toasts[i].id === toastId) {
              toasts.toasts.splice(i, 1);
            }
          }
        }, hideMsecs);
      }
      return toastId;
    },

    hideToast: function (toastId) {
      var
        toasts = this._getToastsComponent();
      for (var i in toasts.toasts) {
        if (toasts.toasts[i].id === toastId) {
          toasts.toasts.splice(i, 1);
        }
      }
    },

    hideToasts: function () {
      var
        toasts = this._getToastsComponent();
      toasts.toasts = [];
    },

    getToast: function (toastId) {
      var
        toasts = this._getToastsComponent();
      for (var i in toasts.toasts) {
        if (toasts.toasts[i].id === toastId) {
          return toasts.toasts[i];
        }
      }
      return null;
    },

    getToasts: function () {
      var
        toasts = this._getToastsComponent();
      return toasts.toasts;
    },
	
	// Public app local storage related methods
	
	setOption: function (key, value) {
      return localStorage.setItem(key, value);		
	},
	
	getOption: function (key, defaultValue) {
      return localStorage.getItem(key) !== null ? 
	   localStorage.getItem(key) : defaultValue;		
	},

	removeOption: function (key) {
      return localStorage.removeItem(key);
	},	
	
	clearOptions: function () {
      return localStorage.clear();
	},		

    // Public app controls related methods

    focusControl: function (controlName) {
      $('#' + controlName).focus();
    },

    // Public app themes related methods

    setAppTheme: function (themeName) {
      var
	    lowerThemeName = themeName.toLowerCase();
	  
      if (this.themes.indexOf(lowerThemeName) === -1) {
	    return false;		  
	  }	  

      $('body').removeClass(this.theme);
      this.theme = lowerThemeName;      	  
      $('#app-theme').attr('href', 'app/styles/' + lowerThemeName + '.css');
	  $('body').addClass(this.theme);	  	  
	  return lowerThemeName;
    },

    setAppFixedStyle: function () {
      this.style = 'fixed';
      $('#app-style').attr('href', 'app/styles/fixed.css');
    },

    setAppScaledStyle: function () {
      this.style = 'scaled';
      $('#app-style').attr('href', 'app/styles/scaled.css');
    },

    setAppTextDirection: function (textDirection) {
      var
        html = document.getElementsByTagName('html')[0];
      this.textDirection = textDirection;
      html.setAttribute('dir', textDirection);
    },
	
	getAppColorScheme: function() {
	  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';	
	},

    // Public app device related methods

    setViewReadyForDeviceKeyboard: function () {
	  var
	    self = this;
      document.addEventListener('deviceready', function () {
        $('#' + self._getCurrentView().name).css({
          "margin-top": '0px',
          "height": window.innerHeight + 'px'
        });		  
	  });	
    },
	
    setDialogReadyForDeviceKeyboard: function () {
	  var
	    self = this;
      document.addEventListener('deviceready', function () {
        $('#' + self._getCurrentView().name + ' .modal-content').css({
          "margin-top": '0px',
          "height": window.innerHeight + 'px'
        });		  
	  });	
    },	

    // Public app Web Extensions related methods

    webExtensionSendMessageToActiveTab: function (message, callback) {
      if (window.chrome) {
        chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
          chrome.tabs.sendMessage(tabs[0].id, message, callback);
        });
      }
    },
	
    webExtensionSendMessageToAllTabs: function (message, callback) {
      if (window.chrome) {
        chrome.tabs.query({}, function(tabs) {
          for (var i=0; i<tabs.length; ++i) {
            chrome.tabs.sendMessage(tabs[i].id, message, callback);
          }
        });
      }
    },	

    // Public app strings related methods

    strLen: function (text) {
      return text.length;
    },

    trimStr: function (text) {
      return text.trim();
    },

    lowerCase: function (text) {
      return text.toLowerCase();
    },

    upperCase: function (text) {
      return text.toUpperCase();
    },

    strSearch: function (text, query) {
      return text.search(query);
    },

    subStr: function (text, start, count) {
      return text.substr(start, count);
    },

    strReplace: function (text, from, to) {
      return text.replace(from, to);
    },

    strReplaceAll: function (text, from, to) {
      return text.split(from).join(to);
    },

    splitStr: function (text, separator, limit) {
      return text.split(separator, limit);
    },

    strToBase64: function (text) {
      return window.Base64.encode(text);
    },

    base64ToStr: function (text) {
      return window.Base64.decode(text);
    },

    serialize: function (value) {
      return JSON.stringify(value);
    },

    unserialize: function (text) {
      return JSON.parse(text);
    },

    randomStr: function (length) {
      var
        result = '',
        length = length || 10,
        charsMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        mapLength = charsMap.length;
      for (var i = 0; i < length; i++) {
        result += charsMap.charAt(Math.floor(Math.random() * mapLength));
      }
      return result;
    },
	
	// Public app numbers related methods
	
	randomNum: function (maxNum) {
	  maxNum = maxNum || 100;
	  return Math.floor(Math.random() * maxNum);	
	},

    // Public app sound related methods

    beep: function () {
      this.playSound(
        'app/audios/beep/beep.mp3',
        'app/audios/beep/beep.ogg'
      );
    },

    playSound: function (mp3Url, oggUrl) {
      if (this.internal.lastSound === null) {
        this.internal.lastSound = new Audio();
      }
      if (this.internal.lastSound.canPlayType('audio/ogg') !== '') {
        this.internal.lastSound.src = oggUrl;
        this.internal.lastSound.type = 'audio/ogg';
      } else {
        this.internal.lastSound.src = mp3Url;
        this.internal.lastSound.type = 'audio/mpeg';		  
      }
      this.internal.lastSound.play();
	  return this.internal.lastSound;
    },

    stopSound: function () {
      this.internal.lastSound.pause();
      this.internal.lastSound.currentTime = 0;
    },
	
	// Public app resources related methods
	
	resource: function (name) {
      if (!window.appLangs[this.language]) {
        return window.appLangs[this.internal.defaultLanguage].resources[name];
      } else {
        return window.appLangs[this.language]['resources'][name] !== undefined ?
          window.appLangs[this.language]['resources'][name] :
		  window.appLangs[this.internal.defaultLanguage].resources[name];
      }
	},

    // Public app languages related methods

    translateView: function () {
      return this._translateView();
	},
	
	getLanguages: function () {
	  var
	    result = [];
	  for (var i in window.appLangs) {
	    result.push({code: i, name: window.appLangs[i].language.name});	  
	  }  	
	  return result;
	},
	
	getLanguagesNames: function () {
	  var
        result = [];	  
      for (var i in window.appLangs) {
	    result.push(window.appLangs[i].language.name);	  
	  }
	  return result;
	},	
	
	getLanguagesCodes: function () {
	  var
        result = [];	  
      for (var i in window.appLangs) {
	    result.push(i);	  
	  }
	  return result;
	},		
	
	getLanguageCodeFromName: function (name) {
	  var
        result = '';	  
      for (var i in window.appLangs) {
	    if (window.appLangs[i].language.name === name) {
		  result = i;
          break;		  
		}	  
	  }
	  return result;
	},	
	
	getLanguageNameFromCode: function (code) {
	  var
        result = '';	  
      for (var i in window.appLangs) {
	    if (i === code) {
		  result = window.appLangs[i].language.name;
          break;		  
		}	  
	  }
	  return result;
	},

    
    savedisplayedinfo: function () {
      var
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
//app.cordova.vibration.vibrate(200);
app.cordova.dialogs.confirm(
      'Successfully added to collection!',
      views.MoreInfo.label11.text,
      function (buttonIndex) {
        switch(buttonIndex){
            case 1:
   //return app.showDialog('dialogSrvConnection');
                break;
            case 2:
                break;
        }
      },
      ['Ok', 'Open Collection']
  );
    },

    TTSQuote: function () {
      var
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();

let quotecontent = $('#idHTMLTextInfo p').text();

//let quoteauth = $('#idActualQuote').text();

$('#speakericon').addClass("active");

TTS.speak({
        text: quotecontent,
        pitch: 0.9,
        cancel: true
      }).then(function () {
      $('#speakericon').removeClass("active");
      //app.showAlert('spoketh');
  }, function (reason) {
    $('#speakericon').removeClass("active");
    $('#speakericon').text('<i class="fas fa-volume-mute fa-2x"></i><p>Speak</p>');
    app.showAlert(reason);
  });
    },

    AdviceSlip: function () {
      var
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();



fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(res => {
      $('#idHTMLTextInfo').hide().fadeIn(400);
      document.getElementById("idHTMLTextInfo").innerHTML =
      '<div class="container"><br><br><p class="quoteText" id="idActualQuote">' + res.slip.advice + '<br>' +
      '</p></div>';
      $('#reloadinf').removeClass('fa-spin');
      $('#reloadbtn').removeClass('active');
      
    })
    .catch(err => {
       $('#reloadinf').removeClass('fa-spin');
      $('#reloadbtn').removeClass('active');
       app.ErrorPromptRetry(err);
    });

return;
    },

    GenerateNew: function () {
      var
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();
//app.hideAlert();

$('#reloadbtn').addClass('active');
$('#reloadinf').addClass('fa-spin');

  switch (views.MoreInfo.label11.text){
         case 'Advice Slip':
               app.AdviceSlip();
              break;
         case 'Anime Quotes':
               app.AnimeChanQuote();
              break;
         case 'Movie Quotes':
               app.MovieQuote();
              break;
         case 'Writer\'s Text':
              var headers = {
                  "Access-Control-Allow-Origin": "*"
              };
              // Send the request
              cordova.plugin.http.sendRequest('https://fungenerators.com/random/writing-prompt', {
                  method: "GET",
                  headers: headers
              }, function (response) {
                  // Select the h2 element and extract its content\
                  var quote = response.data.match(/<h2[^>]*>([\s\S]*?)<\/h2>/i)[1];
                  //$('#idLblGenQuote').text(quote);
                  $('#reloadinf').removeClass('fa-spin');
                  $('#reloadbtn').removeClass('active');
                  document.getElementById("idHTMLTextInfo").innerHTML = quote;
              }, function (response) {
                  // Handle error
                  $('#reloadinf').removeClass('fa-spin');
                  $('#reloadbtn').removeClass('active');
                  app.showAlert(response.error);
              });
              
              break;
         default:
              document.getElementById("idHTMLTextInfo").innerHTML =
              '<div class="container"><br><br><p class="quoteText" id="idActualQuote"> feature not yet implimented.<br>' +
              '</p></div>';
              $('#reloadinf').removeClass('fa-spin');
              $('#reloadbtn').removeClass('active');
              break;
  }

    },

    AnimeChanQuote: function () {
      var
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();

fetch("https://animechan.vercel.app/api/random")
    .then(res => res.json())
    .then(res => {
      $('#idHTMLTextInfo').hide().fadeIn(400);
      document.getElementById("idHTMLTextInfo").innerHTML =
      '' +
      '<p class="quoteText" id="idActualQuote">' + res.quote + '' +
      '<span id="idQuoteAuthor"><br>-<br> ' + res.anime + ' , ' + res.character + '</span>' +
      '<p><br>';
      $('#reloadinf').removeClass('fa-spin');
      $('#reloadbtn').removeClass('active');
    })
    .catch(err => {
        app.ErrorPromptRetry(err);
        $('#reloadinf').removeClass('fa-spin');
        $('#reloadbtn').removeClass('active');
    });

return;
    },

    MovieQuote: function () {
      var
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();


fetch("https://movie-quote-api.herokuapp.com/v1/quote/")
    .then(res => res.json())
    .then(res => {
      $('#idHTMLTextInfo').hide().fadeIn(400);
      document.getElementById("idHTMLTextInfo").innerHTML =
      '<br><br><p class="quoteText" id="idActualQuote">' + res.quote + '<br>' +
      '<span id="idQuoteAuthor"><br>-<br>' + res.role + ' , ' + res.show + '</span>' +
      '</p>';
      $('#reloadinf').removeClass('fa-spin');
      $('#reloadbtn').removeClass('active');
    })
    .catch(err => {
        $('#reloadinf').removeClass('fa-spin');
        $('#reloadbtn').removeClass('active');
        app.ErrorPromptRetry(err);
        });

return;
    },

    ErrorPromptRetry: function (errorinf) {
      var
        view = this._getCurrentView(),
        views = this._getLoadedViews(),
        frames = this._getLoadedFrames(),
        dialogs = this._getLoadedDialogs();

$('#idHTMLInfoBtmNav').fadeOut();
window.alerty.toasts(views.MoreInfo.label11.text + ': Connection error.',
      {
          bgColor: '#032d3a',
          fontColor: '#fff',
          time:4222
      }, function(){
      $('#idHTMLInfoBtmNav').fadeIn();
      //app.showToast('toasts callback');
});
    },

	
    // Internal / Private app methods

    _appEventOnResize: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },
	
    _appEventOnMessage: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },		
	
    _appEventOnContextMenu: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },	

    _appEventOnColorSchemeChange: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnOnline: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
// Place here the Javascript code to be executed in the "Online" event of the "254podz" app
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

$('#reloadinf').addClass('loading_success');

    },

    _appEventOnOffline: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
// Place here the Javascript code to be executed in the "Offline" event of the "254podz" app
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

$('#reloadinf').addClass('loading_error');
    },

    _appEventOnDomReady: function () {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      
// Place here the Javascript code to be executed in the "DomReady" event of the "254podz" app
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

app.setVar('selecteditm', null);


//$( "#listlink li" ).addClass('is-active').siblings().removeClass('is-active');

$( "#listlink li" ).contextmenu(function() {

  app.store.selecteditm = $("#listlink li:active .titles").text();
  
  switch (app.store.selecteditm){
         case 'Favorites':
              app.replaceView('Favorites');
              break;
         default:
              app.replaceView('MoreInfo');
              break;
  }
  app.cordova.vibration.vibrate(200);
});
    },

    _appEventOnBatteryStatus: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      self.cordova.battery.level = event.level;
      self.cordova.battery.isPlugged = event.isPlugged;
      
    },

    _appEventOnBatteryLow: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      self.cordova.battery.level = event.level;
      self.cordova.battery.isPlugged = event.isPlugged;
      
    },

    _appEventOnBatteryCritical: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      self.cordova.battery.level = event.level;
      self.cordova.battery.isPlugged = event.isPlugged;
      
    },

    _appEventOnDeviceReady: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;

      window.addEventListener('online', self._appEventOnOnline);
      window.addEventListener('offline', self._appEventOnOffline);
      window.addEventListener('batterylow', self._appEventOnBatteryLow);
      window.addEventListener('batterystatus', self._appEventOnBatteryStatus);
      window.addEventListener('batterycritical', self._appEventOnBatteryCritical);
      window.addEventListener('orientationchange', self._appEventOnOrientationChange);
      document.addEventListener('pause', self._appEventOnPause);
      document.addEventListener('resume', self._appEventOnResume);
       
       
      document.addEventListener('backbutton', self._appEventOnBackButton); 
      
// Place here the Javascript code to be executed in the "DeviceReady" event of the "254podz" app
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

app.setVar('isMenuOpen', false);
app.setVar('upv', 'HomePage');
app.setVar('ucv', 'HomePage');

app.setVar('showinqoteopt', false);

/*
const oHomeIcons = document.querySelectorAll('.bnav ul li');

oHomeIcons.forEach((idIcon,indx)=>{
    idIcon.addEventListener('click',()=>{

        // Remove any activated menu item styling
        // document.querySelectorAll('.bnav ul li').forEach(content => content.classList.remove('active'));

        oHomeIcons[indx].addClass('pulseonce');
    })
})

*/

    },

    _appEventOnPause: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnResume: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnBackButton: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
// Place here the Javascript code to be executed in the "BackButton" event of the "254podz" app
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List

/*
if (app.store.ucv == 'HomePage'){
   navigator.app.exitApp();
} else
  return app.replaceView('HomePage');
}

if (app.store.ucv == 'HomePage'){
   navigator.app.exitApp();
} else {

}
*/

if (app.store.ucv == 'HomePage'){
  app.cordova.dialogs.confirm(
        'Are you sure you want to Exit?',
        'Confirm',
        function (buttonIndex) {
          switch(buttonIndex){
              case 1:
                   navigator.app.exitApp();
                  break;
              case 2:
                  //return app.replaceView(app.store.upv);
                  break;
          }
        },
        ['Exit', 'Cancel']
    );
} else {
  if (app.store.showinqoteopt) return app.hideDialogs();
  return app.replaceView(app.store.upv);
}

self.preventDefault();
    },

    _appEventOnOrientationChange: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnVolumeUpButton: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnVolumeDownButton: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnClick: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnDblClick: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventSwipeRight: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventSwipeLeft: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnKeyUp: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnKeyDown: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnMouseUp: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnMouseDown: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnMouseMove: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = event;
      
    },

    _appEventOnChromeRuntimeMessage: function (message) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      
    },

    _appEventOnRenderError: function (error, vm, info) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      self.error = {"message": error, "vm": vm, "info": info};

      window.console.error("Render error:" + "\n\nError message: " + self.error.message + "\n\nError info: " + self.error.info);

      self.error = null;
    },

    _appEventOnJavascriptError: function (errorMsg, url, lineNumber) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = null;
      self.error = {"message": errorMsg, "url": url, "lineNumber": lineNumber};

      window.console.error("Javascript error:" + "\n\nError message: " + self.error.message + "\n\nError script: " + self.error.url + "\n\nLine number: " + self.error.lineNumber);

      self.error = null;
    },

    _appEventViewChange: function (to, from) {
	  if (to.name === from.name) {
	    return;	  
	  }	
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
      self.event = {
        "nextViewName": to.name,
        "prevViewName": from.name
      };
      
// Place here the Javascript code to be executed in the "ViewChange" event of the "254podz" app
// Press the F1 key to get more information about this specific event
// Press the CTRL + SPACE shortcut to show the Editor Quick Code List


app.store.upv = app.event.prevViewName;
app.store.ucv = app.event.nextViewName;

/*
if (app.event.prevViewName == 'Favorites' && app.event.nextViewName == 'HomePage'){
   return app.replaceView('MoreInfo');
}

*/
    },

    _appEventOnSidebarItemClick: function (event, item, index, subindex) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
	  self.event = event;
      self.sidebar.item = item;
	  self.sidebar.item.index = index;
	  self.sidebar.item.subindex = subindex;
      
    },		
	
    _appEventOnSidebarHeaderClick: function (event) {
      var
        self = this,
        view = app._getCurrentView(),
        views = app._getLoadedViews(),
        frames = app._getLoadedFrames(),
        dialogs = app._getLoadedDialogs();
	  self.event = event;	
      
    },	

    _setupAppEvents: function () {
      this._setupAppErrorsEvents();
      this._setupAppWindowEvents();
      this._setupAppDocumentEvents();
      this._setupAppHammerEvents();
      this._setupAppDeviceEvents();
      this._setupAppRouterEvents();
      this._setupAppChromeEvents();
    },

    _setupAppErrorsEvents: function () {
      Vue.config.errorHandler = this._appEventOnRenderError;
      window.addEventListener('error', this._appEventOnJavascriptError);
    },

    _setupAppWindowEvents: function () {
      window.addEventListener('resize', this._appEventOnResize);
      window.addEventListener('message', this._appEventOnMessage);
      window.addEventListener('contextmenu', this._appEventOnContextMenu);	
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this._appEventOnColorSchemeChange);	  
    },

    _setupAppDocumentEvents: function () {
      var self = this;
      window.addEventListener('DOMContentLoaded', function () {
		// This timeout solves a problem if we use app.showAlert() and others without it (?)
        window.setTimeout(self._appEventOnDomReady, 100);
      });	  
      document.addEventListener('click', this._appEventOnClick);
      document.addEventListener('dblclick', this._appEventOnDblClick);
      document.addEventListener('keyup', this._appEventOnKeyUp);
      document.addEventListener('keydown', this._appEventOnKeyDown);
      document.addEventListener('mouseup', this._appEventOnMouseUp);
      document.addEventListener('mousedown', this._appEventOnMouseDown);
      document.addEventListener('mousemove', this._appEventOnMouseMove);
    },

    _setupAppHammerEvents: function () {
      var
        ha = new Hammer(document.body);
	  ha.get('swipe').set({direction: Hammer.DIRECTION_HORIZONTAL});	
      ha.on('swiperight', this._appEventSwipeRight);
      ha.on('swipeleft', this._appEventSwipeLeft);
    },

    _setupAppDeviceEvents: function () {
      document.addEventListener('deviceready', this._appEventOnDeviceReady);
    },

    _setupAppRouterEvents: function () {
      var
              self = this;
      this.$router.beforeEach(function (to, from, next) {
        next(self._appEventViewChange(to, from));
      });
    },

    _setupAppChromeEvents: function () {
      if (window.chrome && chrome.runtime && chrome.runtime.onMessage) {
        chrome.runtime.onMessage.addListener(
         this._appEventOnChromeRuntimeMessage);
      }
    },

    _getControlByName: function (parent, name) {
      for (var i in parent.$children) {
        if (parent.$children[i].name === '') {
          continue;
        }
        if (name === parent.$children[i].name) {
          return parent.$children[i];
        }
        if (parent.$children[i].$children.length > 0) {
          var
            result = this._getControlByName(parent.$children[i], name);
          if (result && result.name && result.name === name) {
            return result;
          }
        }
      }
    },

    _getCurrentViewControlByName: function (name) {
      return this._getControlByName(this._getCurrentView(), name);
    },

    _getCurrentView: function () {
      if (this.internal.activeDialog !== null) {
        return this.internal.activeDialog;
      }

      for (var i in this.$children) {
        if (this.$route.name === this.$children[i].name) {
          return this.$children[i];
        }
      }
      return null;
    },

    _getLoadedFrames: function () {
      return window.appFrames;
    },

    _getLoadedViews: function () {
      var
        result = [];
      for (var i in this.$children) {
        result[this.$children[i].name] = this.$children[i];
      }
      return result;
    },

    _getLoadedDialogs: function () {
      var
        result = [];
      for (var i in this.internal.dialogs.$children) {
        if (this.internal.dabdialogs.indexOf(this.internal.dialogs.$children[i].$el.id) !== -1) {
          continue;
        }
        result[this.internal.dialogs.$children[i].name] = this.internal.dialogs.$children[i];
      }
      return result;
    },

    _getActiveDialog: function () {
      this.internal.activeDialog = null;
      var
        activeModals = $($('.modal.show').get().reverse());
      if (activeModals.length > 0) {
        for (var i = 0; i < this.internal.dialogs.$children.length; i++) {
          if (this.internal.dabdialogs.indexOf(this.internal.dialogs.$children[i].$el.id) !== -1) {
            continue;
          }
          if (this.internal.dialogs.$children[i].$el.id === $($('.modal.show').get().reverse())[0].id) {
            this.internal.activeDialog = this.internal.dialogs.$children[i];
            break;
          }
        }
      }
      return this.internal.activeDialog;
    },

    _getToastsComponent: function () {
      for (var i in app.internal.dialogs.$children) {
        if (app.internal.dialogs.$children[i].$el.id === 'dab-toasts-wrapper') {
          return app.internal.dialogs.$children[i];
        }
      }
      return null;
    },

    _transformHttpRequest: function (http) {
      if (http.contentType === 'application/json') {
        return JSON.stringify(http.data);
      } else if (http.contentType === 'application/x-www-form-urlencoded') {
        var
          result = [];
        for (var key in http.data) {
          result.push(encodeURIComponent(key) + '=' + encodeURIComponent(http.data[key]));
        }
        return result.join('&');
      } else if (http.contentType === false ||
       http.contentType === 'multipart/form-data') {
        var
          result = new FormData();
        for (var key in http.data) {
          result.append(key, http.data[key]);
        }
        return result;
      } else {
        return http.data;
      }
    },

    _translateFrames: function () {
      for (var frame in window.appFrames) {
        for (var control in window.appFrames[frame]) {
          for (var property in window.appFrames[frame][control]) {
            var
              origProp = property + '_default';
            if (this.language === this.internal.defaultLanguage) {
              if (window.appFrames[frame][control][origProp] !== undefined) {
                window.appFrames[frame][control][property] =
                 window.appFrames[frame][control][origProp];
              }
              continue;
            }
            if (window.appLangs[this.language] && window.appLangs[this.language]['frames'] &&
             window.appLangs[this.language]['frames'][frame] && window.appLangs[this.language]['frames'][frame][control] &&
              window.appLangs[this.language]['frames'][frame][control][property]) {
			   if (window.appFrames[frame][control][origProp] === undefined) { 	  
                 window.appFrames[frame][control][origProp] =
                  window.appFrames[frame][control][property];
			   }
               window.appFrames[frame][control][property] =
                window.appLangs[this.language]['frames'][frame][control][property];
            }
          }
        }
      }
    },
	
	_translateSidebar: function () {
      if (window.appLangs[this.language] && window.appLangs[this.language].sidebar) {
		if (window.appLangs[this.language].sidebar['header'] !== undefined) {
          this.sidebar.header = window.appLangs[this.language].sidebar.header;
		}		
		if (window.appLangs[this.language].sidebar['imageUrl'] !== undefined) {
          this.sidebar.imageUrl = window.appLangs[this.language].sidebar.imageUrl;
		}		
		if (window.appLangs[this.language].sidebar['items'] !== undefined) {
          this.sidebar.items = window.appLangs[this.language].sidebar.items;
		}		
      }	  	  		
	},

    _translateView: function () {
	  var
	    view = this._getCurrentView();
      this._translateFrames();
      this._translateSidebar(); 
      for (var control in view) {
        for (var property in view[control]) {
          var
            origProp = property + '_default';
          if (this.language === this.internal.defaultLanguage) {
            if (view[control][origProp] !== undefined) {
              view[control][property] = view[control][origProp];
            }
            continue;
          }
          if (window.appLangs[this.language] && window.appLangs[this.language]['views'] &&
           window.appLangs[this.language]['views'][view.name] && window.appLangs[this.language]['views'][view.name][control] &&
            window.appLangs[this.language]['views'][view.name][control][property]) {
             if (view[control][origProp] === undefined) {
			   view[control][origProp] = view[control][property];
			 }
             view[control][property] = window.appLangs[this.language]['views'][view.name][control][property];
          }
        }
      }
    },

    _setViewEvents: function (view) {
      if (view._with_event_listeners) {
        return true;
      }
      var
        el = document.getElementById(view.name),
        ha = new Hammer(el);
      el.addEventListener('click', view.clickHandler);
      el.addEventListener('dblclick', view.dblclickHandler);
      el.addEventListener('mouseup', view.mouseupHandler);
      el.addEventListener('mousedown', view.mousedownHandler);
      el.addEventListener('mousemove', view.mousemoveHandler);
      el.addEventListener('mouseenter', view.mouseenterHandler);
      el.addEventListener('mouseleave', view.mouseleaveHandler);
      el.addEventListener('contextmenu', view.contextmenuHandler);
	  ha.get('swipe').set({direction: Hammer.DIRECTION_HORIZONTAL});
      ha.on('swiperight', view.swipeRightHandler);
      ha.on('swipeleft', view.swipeLeftHandler);
      view._with_event_listeners = true;
    },

    _setupAppHtml: function () {
      var
        html = document.getElementsByTagName('html')[0],
        title = document.getElementsByTagName('title')[0];
      title.innerText = this.name;
      html.setAttribute('dir', this.textDirection);
      html.setAttribute('lang', this.language);
    },

    _setupAppDialogs: function () {
      var
        app = this;
      $(function () {
        app.internal.dialogs = new Vue().$mount('#dialogs');
      });
    },

    _setupAppVariables: function () {
	  this.query = false;
      this.navbarStyle = {dark: 'dark', light: 'light'};
      this.size = {sm: 'sm', md: 'md', lg: 'lg', xl: 'xl'};
      this.tableStyle = {none: '', dark: 'dark', light: 'light'};
	  this.align = {left: "left", center: "center", right: "right"};
      this.dropdownItem = {item: 'item', header: 'header', divider: 'divider'};
      this.dropdownDir = {up: 'dropup', down: 'dropdown', right: 'dropright'};
      this.httpMethod = {get: 'GET', post: 'POST', put: 'PUT', head: 'HEAD', "delete": 'DELETE'};
      this.navbarPos = {fixedTop: 'fixed-top', fixedBottom: 'fixed-bottom', stickyTop: 'sticky-top'};
      this.imageFit = {fill: 'fill', none: 'none', cover: 'cover', revert: 'revert', contain: 'contain', scaleDown: 'scale-down'};
      this.kind = {link: 'link', dark: 'dark', info: 'info', light: 'light', danger: 'danger', primary: 'primary', warning: 'warning', success: 'success', secondary: 'secondary'};
      this.inAnimation = {bounceIn: 'bounceIn', bounceInDown: 'bounceInDown', bounceInLeft: 'bounceInLeft', bounceInRight: 'bounceInRight', bounceInUp: 'bounceInUp', fadeIn: 'fadeIn', fadeInDown: 'fadeInDown', fadeInDownBig: 'fadeInDownBig', fadeInLeft: 'fadeInLeft', fadeInLeftBig: 'fadeInLeftBig', fadeInRight: 'fadeInRight', fadeInRightBig: 'fadeInRightBig', fadeInUp: 'fadeInUp', fadeInUpBig: 'fadeInUpBig', fadeInTopLeft: 'fadeInTopLeft', fadeInTopRight: 'fadeInTopRight', fadeInBottomLeft: 'fadeInBottomLeft', fadeInBottomRight: 'fadeInBottomRight', flipInX: 'flipInX', flipInY: 'flipInY', lightSpeedIn: 'lightSpeedIn', lightSpeedInRight: 'lightSpeedInRight', lightSpeedInLeft: 'lightSpeedInLeft', rollIn: 'rollIn', rotateIn: 'rotateIn', rotateInDownLeft: 'rotateInDownLeft', rotateInDownRight: 'rotateInDownRight', rotateInUpLeft: 'rotateInUpLeft', rotateInUpRight: 'rotateInUpRight', zoomIn: 'zoomIn', zoomInDown: 'zoomInDown', zoomInLeft: 'zoomInLeft', zoomInRight: 'zoomInRight', zoomInUp: 'zoomInUp', bounce: 'bounce', flash: 'flash', pulse: 'pulse', rubberBand: 'rubberBand', shake: 'shake', swing: 'swing', tada: 'tada', wobble: 'wobble', jello: 'jello'};
      this.outAnimation = {bounceOut: 'bounceOut', bounceOutDown: 'bounceOutDown', bounceOutLeft: 'bounceOutLeft', bounceOutRight: 'bounceOutRight', bounceOutUp: 'bounceOutUp', fadeOut: 'fadeOut', fadeOutDown: 'fadeOutDown', fadeOutDownBig: 'fadeOutDownBig', fadeOutLeft: 'fadeOutLeft', fadeOutLeftBig: 'fadeOutLeftBig', fadeOutRight: 'fadeOutRight', fadeOutRightBig: 'fadeOutRightBig', fadeOutUp: 'fadeOutUp', fadeOutUpBig: 'fadeOutUpBig', fadeOutTopLeft: 'fadeOutTopLeft', fadeOutTopRight: 'fadeOutTopRight', fadeOutBottomRight: 'fadeOutBottomRight', fadeOutBottomLeft: 'fadeOutBottomLeft', flipOutX: 'flipOutX', flipOutY: 'flipOutY', lightSpeedOut: 'lightSpeedOut', lightSpeedOutRight: 'lightSpeedOutRight', lightSpeedOutLeft: 'lightSpeedOutLeft', rollOut: 'rollOut', rotateOut: 'rotateOut', rotateOutDownLeft: 'rotateOutDownLeft', rotateOutDownRight: 'rotateOutDownRight', rotateOutUpLeft: 'rotateOutUpLeft', rotateOutUpRight: 'rotateOutUpRight', slideOutUp: 'slideOutUp', slideOutDown: 'slideOutDown', slideOutLeft: 'slideOutLeft', slideOutRight: 'slideOutRight', zoomOut: 'zoomOut', zoomOutDown: 'zoomOutDown', zoomOutLeft: 'zoomOutLeft', zoomOutRight: 'zoomOutRight', zoomOutUp: 'zoomOutUp', backOutDown: 'backOutDown', backOutLeft: 'backOutLeft', backOutRight: 'backOutRight', backOutUp: 'backOutUp', bounce: 'bounce', flash: 'flash', pulse: 'pulse', rubberBand: 'rubberBand', shake: 'shake', swing: 'swing', tada: 'tada', wobble: 'wobble', jello: 'jello', hinge: 'hinge'};
    },
	
	_setupAppPlugins: function () {
      var
        app = this;		
      this.plugins = {};       		
	  app.plugins.decsoft =
  app.plugins.decsoft ? 
  app.plugins.decsoft : {};

app.plugins.decsoft.clipboard = {

  clipboardInstance: null,

  isSupported: function () {
    return ClipboardJS.isSupported();	  
  },

  setText: function (text, successCallback, errorCallback) {
    app.plugins.decsoft.clipboard.clipboardInstance = new ClipboardJS('*', {
      text: function(trigger) {
        return text;
      }
    });
	  
	this.clipboardInstance.on('error', function (error) {
	  if (errorCallback) {
	    errorCallback(error);	  
	  }	
	  app.plugins.decsoft.clipboard.clipboardInstance.destroy();
	});
	
	this.clipboardInstance.on('success', function () {
	  if (successCallback) {
	    successCallback();	  
	  }	
	  app.plugins.decsoft.clipboard.clipboardInstance.destroy();
	});	
  }
};


	},

    _setupCordovaPlugins: function () {
      var
        app = this;
      this.cordova = {};
      
    this.cordova.dialogs = {

      alert: function (message, title, dismissCallback, butonName) {
		if (navigator.notification) {
          return navigator.notification.alert(message, dismissCallback, title, butonName);
		} else {
		  window.alert(message);	
		}
      },
	  
	  confirm: function (message, title, confirmCallback, buttonLabels) {
		if (navigator.notification) {		  
          return navigator.notification.confirm(message, confirmCallback, title, buttonLabels);		  
		} else {
          if (window.confirm(message)) {
			alert(confirmCallback);  
		    if (confirmCallback) {
			  confirmCallback(1);  	
			}    	  
		  } else {
		    if (confirmCallback) {
			  confirmCallback(0);  	
			}    	  			  
		  }		  
		}
	  },
	  
	  prompt: function (message, title, promptCallback, buttonLabels, defaultText) {
		if (navigator.notification) {
		  return navigator.notification.prompt(message, promptCallback, title, buttonLabels, defaultText);	
		} else {
          var 
            input = window.prompt(message, defaultText);			
	      if (input !== null) {
		    if (promptCallback) {
		      promptCallback({buttonIndex: 1, input1: input});		
			}	  
		  } else {
		    if (promptCallback) {
		      promptCallback({buttonIndex: 0, input1: null});		
			}	  			  
		  }		
		}
	  },
	  
	  beep: function (times) {
		if (navigator.notification) {
	      return navigator.notification.beep(times);	  
		} else {
          app.beep();			
		}
	  }
    };	

    this.cordova.vibration = {

      vibrate: function (milliseconds) {
        return navigator.vibrate(milliseconds);
      },
	  
      vibratePattern: function (pattern) {
        return navigator.vibrate(pattern);
      },	  
	  
      cancel: function (milliseconds) {
        return navigator.vibrate(0);
      },	  

    };	
	

    this.cordova.statusbar = {

      hide: function () {
        return StatusBar.hide();
      },
	  
      show: function () {
        return StatusBar.show();
      },
	  
      isVisible: function () {
        return StatusBar.isVisible;
      },	  
	  
      overlaysWebView: function (overlays) {
        return StatusBar.overlaysWebView(overlays);
      },	  	  
	  
      styleDefault: function () {
        return StatusBar.styleDefault();
      },	  	  	  
	  
      styleLightContent: function () {
        return StatusBar.styleLightContent();
      },	

      backgroundColorByName: function (colorName) {
        return StatusBar.backgroundColorByName(colorName);
      },		  
	  
      backgroundColorByHexString: function (colorHexStr) {
        return StatusBar.backgroundColorByHexString(colorHexStr);
      }
    };	


    }
  }
})
.$mount('#app');
