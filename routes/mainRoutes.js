// Home Route
Router.route('/', {
  name: 'home',
  action: function () {
    this.render('home');
    SEO.set({ title: 'Home - ' + Meteor.App.NAME });
  }
});

Router.route('/news', {
  name: 'news',
  action: function () {
    this.render('news');
    SEO.set({ title: 'News - ' + Meteor.App.NAME });
  }
});

Router.route('/gallery', {
  name: 'gallery',
  action: function () {
    this.render('gallery');
    SEO.set({ title: 'Gallery - ' + Meteor.App.NAME });
  }
});

Router.route('/gallery/:id', {
  name: 'gallery.album',
  action: function () {
    this.render('album', {data: {id: this.params.id}});
    SEO.set({ title: 'Album - ' + Meteor.App.NAME });
  }
});