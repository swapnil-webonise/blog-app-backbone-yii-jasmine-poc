<?php
/**
 * Created by JetBrains PhpStorm.
 * User: webonise
 * Date: 22/4/14
 * Time: 6:07 PM
 * To change this template use File | Settings | File Templates.
 */
class Site extends CActiveRecord {

    public static function model($className = __CLASS__) {
        return parent::model($className);
    }

    public function tableName() {
        return 'blogs';
    }

    public function primaryKey() {
        return 'id';
    }

    public function getBlogs(){
        $blogs = Site::findAll();
        $records = array();
        foreach($blogs as $blog){
            $records[] = $blog->attributes;
        }
        return $records;
    }

    public function getBlogDetails($id){
        $blog = Site::findByPk($id);

        return $blog->attributes;
    }

    public function saveBlog($blogData){
        $model = new Site();
        $model->title = $blogData['title'];
        $model->blog = $blogData['blog'];
        $model->created = date('Y-m-d H:i:s');
        $model->save();
        return $model->id;
    }
}