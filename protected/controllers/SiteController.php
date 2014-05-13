<?php

/**
 * SiteController is the default controller to handle user requests.
 */
class SiteController extends CController
{
    public $site;
	/**
	 * Index action is the default action in a controller.
	 */
	public function actionIndex()
	{
        $this->render('index');
	}

    public function actionGetBlogs(){
        $this->layout = 'ajax';
        $this->site = new Site();
        $blogs = $this->site->getBlogs();
        echo json_encode($blogs);
    }

    public function actionGetBlog($id){
        $this->layout = 'ajax';
        $this->site = new Site();
        $blog = $this->site->getBlogDetails($id);
        echo json_encode($blog);
    }

    public function actionSaveBlog(){
        $blogData = json_decode(file_get_contents('php://input'), true);
        $this->site = new Site();
        $blog_id = $this->site->saveBlog($blogData);

        echo json_encode($blog_id);
    }

    public function actionTest() {
        $this->render('test');
    }
}