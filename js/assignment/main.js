/**
 * Created with JetBrains PhpStorm.
 * User: webonise
 * Date: 6/5/14
 * Time: 2:12 PM
 * To change this template use File | Settings | File Templates.
 */

// Namespace
var abc = abc || {};

//Models
abc.model = (function(){
    return{
        Blog: Backbone.Model.extend({
            initialize:function(){
                this.id = this.get('blogid');
            },
            setUrl: function (id) {
                this.url = '/site/getBlog/id/' + id;
            }
        }),

        NewBlog: Backbone.Model.extend({
            url: function () {
                return '/site/saveBlog';
            }
        }),

        BlogList: Backbone.Model.extend({})
    };
})();

//Collections
abc.collection = (function(){
    return{
        BlogCollection: Backbone.Collection.extend({
            model: abc.model.Blog
        }),

        BlogListCollection: Backbone.Collection.extend({
            model: abc.model.Blog,
            url: function () {
                return '/site/getBlogs';
            }
        })
    };
})();

//Views
abc.view = (function() {
    return{
        blogListView : Backbone.View.extend({

            events: {'click .btnclick': 'showBlogDetails','click .saveblog':'saveBlog','click .listBtnclick': 'showBlogList','click .newblog': 'createNewBlog','click .cancleblog': 'blogCreationCancel'},

            trackHeadTemplate : _.template([
                '<table class="result">',
                '<tr><td><input type="text" name="id" id="blogid"></td>',
                '<td><button class="btnclick">Search</button></td>',
                '<td><button class="newblog">Create</button></td>',
                '<td><button class="listBtnclick">Blog List</button></td></tr>',
                '</table>'
            ].join('')),

            blogDetailsTemplate : _.template([
                '<div class="blog">',
                '<div class="blogTitle"><%= title %></div>',
                '<div class="blogCreatedOn"><%= created %></div>',
                '<div class="blogDescription"><%= blog %></div>',
                '<div class="readMore"><a href="/site/blog/<%= id %>">Read more</a></div>',
                '</div>'
            ].join('')),

            blogLiTemplate : _.template([
                '<div class="blog">',
                '<div class="blogTitle"><%= title %></div>',
                '<div class="blogCreatedOn"><%= created %></div>',
                '<div class="blogDescription"><%= blog %></div>',
                '<div class="readMore"><a href="/site/blog/<%= id %>">Read more</a></div>',
                '</div>'
            ].join('')),

            createBlogTemplate: _.template([
                '<div class="blogform" style="text-align: center;">',
                '<table><caption><h2>Create Blog</h2></caption><tr><td><label>Title:</label></td>',
                '<td><input type="text" id="title" name="title" required/></td></tr>',
                '<tr><td><label>Description:</label></td>',
                '<td><textarea id="description" name="description" rows="3" cols="21"></textarea></td></tr>',
                '<tr><td></td><td><button class="saveblog">Create</button>&nbsp;&nbsp;&nbsp;<button class="cancleblog">Cancel</button></td></tr>',
                '</div>'
            ].join('')),

            initialize : function(opt) {
                this.BlogModel = new abc.model.Blog();
                this.blogList = new abc.collection.BlogListCollection();
                this.listenTo(this.BlogModel,'change:blog',this.displayDetails);
                this.render();
                this.showBlogList();
            },

            render : function() {
                var self=this ;
                this.$el.html(self.trackHeadTemplate);
            },

            showBlogDetails: function(){
                console.log($('#blogid').val());
                this.BlogModel.setUrl($('#blogid').val());
                this.BlogModel.fetch();
            },

            displayDetails: function(){
                console.log(this.BlogModel);
                $('.blog').remove();
                $('.bloglist').remove();
                this.$el.append(this.blogDetailsTemplate(this.BlogModel.toJSON()));
            },

            showBlogList: function(){
                var self = this;
                this.blogList.fetch({success:function () {
                    $('.blog').remove();
                    $('.bloglist').remove();

                    console.log(self.blogList);
                    self.blogList.each(function(blog){
                        self.$el.append(self.blogLiTemplate(blog.toJSON()));
                    })
                }});
            },

            createNewBlog: function(){
                this.$el.html(this.createBlogTemplate);
            },

            blogCreationCancel: function(){
                //app.navigate("",{trigger:true});
                window.location="";
            },

            saveBlog: function(){
                this.newBlog = new abc.model.NewBlog();
                this.newBlog.set({
                    title:$('#title').val(),
                    blog:$('#description').val()
                });
                this.newBlog.save(null, {
                    success:function(){
                        window.location="";
                    }
                });
            }
        }),

        resultList: Backbone.View.extend({
            tagName:'div',
            className:'first',
            trackHeadTemplate : _.template([
                '<div class="hello">',
                '<h2>Hey<span> hello</span></h2>',
                '</div>'
            ].join('')),

            render:function(){
                this.$el.append(this.trackHeadTemplate);
                return this;
            }
        }),

        blogDetailsView: Backbone.View.extend({
            blogDetailsTemplate : _.template([
                '<div class="blog">',
                '<div class="blogTitle"><%= title %></div>',
                '<div class="blogCreatedOn"><%= created %></div>',
                '<div class="blogDescription"><%= blog %></div>',
                '<div class="readMore"><a href="/site/blog/<%= id %>">Read more</a></div>',
                '</div>'
            ].join('')),

            initialize: function(opt){
                console.log(this.model);
                this.model = opt.model;
                this.model.set('blogid',opt.id);
                this.listenTo(this.model,'change:blog',this.render);
                this.sayFoo();
            },
            render: function(){
                this.$el.html(this.blogDetailsTemplate(this.model.toJSON()));
            }
        })
    };
})();

//Mixin
abc.mixin =(function(){
   return{
       MyMixin:{
           foo: "Mixin demonstration",
           sayFoo: function(){
               alert(this.foo);
           }
       }
   }
})();

_.extend(abc.view.blogDetailsView.prototype, abc.mixin.MyMixin);

//Routers
abc.router = (function() {
    return{
        AppRouter: Backbone.Router.extend({
            routes: {
                "": "resultList",
                "blog/:id": "blogDetails"
           //     "*path": "notFound"
            },

            resultList : function() {
                this.blogListView = new abc.view.blogListView({
                    el: $('#abc')
                });
            },

            blogDetails: function(id){
                if( this.blogListView){
                   this.blogListView.$el.html('');
                }

                this.model = new abc.model.Blog();
                this.model.setUrl(id);
                this.blogDetailsView = new abc.view.blogDetailsView({
                    id: id,
                    el: $('#blogdeatils'),
                    model: this.model
                })

                this.model.fetch();

                this.interval = window.setInterval(_.bind(function () {
                    this.request = this.model.fetch();
                }, this), 10000);
            },

            notFound : function(){
                document.write('Page not found');
            }
        })
    };
})();

var app = new abc.router.AppRouter();
Backbone.history.start({pushState:true,root:"/site/"});