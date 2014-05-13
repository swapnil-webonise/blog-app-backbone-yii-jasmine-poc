<?php

// uncomment the following to define a path alias
// Yii::setPathOfAlias('local','path/to/local-folder');

// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.

return array(
	'basePath'=>dirname(__FILE__).DIRECTORY_SEPARATOR.'..',
	'name'=>'My Web Application',

	// preloading 'log' component
	'preload'=>array('log'),

	// autoloading model and component classes
	'import'=>array(
		'application.models.*',
		'application.components.*',
	),

	'modules'=>array(
		// uncomment the following to enable the Gii tool

		'gii'=>array(
			'class'=>'system.gii.GiiModule',
			'password'=>'abcd',
			// If removed, Gii defaults to localhost only. Edit carefully to taste.
			'ipFilters'=>array('127.0.0.1','::1'),
		),

	),

	// application components
	'components'=>array(
//        'clientScript'=>array(
//            'class'=>'ext.customClientScriptHandler.ClientScriptHandler'//use whatever location you put the extension
//            ),


		'user'=>array(
			// enable cookie-based authentication
			'allowAutoLogin'=>true,
		),
//        'cache'=>array(
//            'class'=>'system.caching.CMemCache',
//            'useMemcached'=>true,
//            'keyPrefix'=>'',
//            'hashKey'=>false,
//            'serializer'=>false,
//            'servers'=>array(
//              // array('host'=>'localhost', 'port'=>11211,'weight'=>10000)
////                array('host'=>'10.0.2.70', 'port'=>11211,'weight'=>10000)
//                array('host'=>'10.0.1.235', 'port'=>11211,'weight'=>10000)
//             //    array('host'=>'10.0.0.140', 'port'=>11211,'weight'=>10000)
//              //  array('host'=>'10.0.2.81', 'port'=>11211,'weight'=>10000)
//            ),
//        ),
		// uncomment the following to enable URLs in path-format

		'urlManager'=>array(
			'urlFormat'=>'path',
            'showScriptName'=>false,
            'rules'=>array(
                ''=>'/site',
                'site/blog/*'=>'/site/index',
                '<controller:\w+>/<id:\d+>'=>'<controller>/view',
                '<controller:\w+>/<action:\w+>/<id:\d+>'=>'<controller>/<action>',
                '<controller:\w+>/<action:\w+>'=>'<controller>/<action>',
            ),
		),

        /*'errorHandler'=>array(
            'errorAction'=>'app/handleError',
        ),*/
        /*'curl' => array(
            'class' => 'ext.Curl',
        ),*/
		// uncomment the following to use a MySQL database

/*        'db'=>array(
            'class'=>'application.extensions.PHPPDO.CPdoDbConnection',
            'pdoClass' => 'PHPPDO',
            'connectionString' => 'oci:dbname=//10.0.0.134:1521/oracle',
            'emulatePrepare' => true,
            'username' => 'racing_apps',
            'password' => 'Webonise6186',
            'charset' => 'utf8',
            'persistent' => true
        ),*/

		'db'=>array(
			'connectionString' => 'mysql:host='.DB_HOST.';dbname='.DB_NAME.';port='.DB_PORT,
			'emulatePrepare' => true,
			'username' => 'adminhr3NWpq',
			'password' => 'IXguxV7YIHv-',
			'charset' => 'utf8',
		),
      /*  'db'=>array(
            'connectionString' => 'oci://10.0.0.134/racing_apps',
            'emulatePrepare' => true,
            'username' => 'racing_apps',
            'password' => 'Webonise6186',
            'charset' => 'utf8',
        ), */

		'errorHandler'=>array(
			// use 'site/error' action to display errors
//			'errorAction'=>'app/handleError',
		),
		'log'=>array(
			'class'=>'CLogRouter',
			'routes'=>array(
				array(
					'class'=>'CFileLogRoute',
					'levels'=>'error, warning',
				),
				// uncomment the following to show log messages on web pages
				/*
				array(
					'class'=>'CWebLogRoute',
				),
				*/
			),
		),
	),

	// application-level parameters that can be accessed
	// using Yii::app()->params['paramName']
	'params'=>array(
		// this is used in contact page
		'adminEmail'=>'webmaster@example.com',
	),
);
