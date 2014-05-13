/**
 * Created with JetBrains PhpStorm.
 * User: weboniselab
 * Date: 13/5/14
 * Time: 11:31 AM
 * To change this template use File | Settings | File Templates.
 */

describe('Running test on AppRouter',function(){
   beforeEach(function(){
      Backbone.history.stop();
   }) ;

   it('- router should exist',function(){
       this.appRouter = new abc.router.AppRouter();
       expect(this.appRouter).toBeDefined();
   });
});

describe('Running test on model',function(){
    beforeEach(function(){
        Backbone.history.stop();
    }) ;

    it('- model should exist',function(){
        this.model = new abc.model.Blog();
        expect(this.model).toBeDefined();
    });
});

describe('Running test on collection',function(){
    beforeEach(function(){
        Backbone.history.stop();
    }) ;

    it('- collection should exist',function(){
        this.collection = new abc.collection.BlogCollection();
        expect(this.collection).toBeDefined();
    });
});

describe('Running test on view',function(){
    beforeEach(function(){
        Backbone.history.stop();
    }) ;

    it('- view should exist',function(){
        this.view = new abc.view.blogListView();
        expect(this.view).toBeDefined();
    });
});

describe('Running test for checking method type',function(){
    beforeEach(function(){
        var blogCollection = Backbone.Collection.extend({
            url : '/site/getBlogs'
        });
        this.server = sinon.fakeServer.create();
        this.blogListCollection = new blogCollection();
    }) ;

    it('- check method request', function () {
        this.blogListCollection.fetch();
        expect(this.server.requests[0].method).toEqual("GET");
    });
});

describe('Running test for function testing',function(){
    beforeEach(function(){
        Backbone.history.stop();
        this.router = new abc.router.AppRouter;
        Backbone.history.start({ pushState : true, root : "/site/"});
    }) ;

    it('- result list function should exist',function(){
        spyOn(abc.router.AppRouter.prototype, 'resultList');


        this.router.navigate('', true);

        expect(abc.router.AppRouter.prototype.resultList).toHaveBeenCalled();
    });

    afterEach(function () {
        this.router.navigate('/test', true);
        this.router.destroy;
        Backbone.history.stop();
    });
});
