<?php

// This is the configuration for yiic console application.
// Any writable CConsoleApplication properties can be configured here.
return array(
	'basePath'=>dirname(__FILE__).DIRECTORY_SEPARATOR.'..',
	'name'=>'My Console Application',

	// preloading 'log' component
	'preload'=>array('log'),

	// application components
	'components'=>array(
		/*'db'=>array(
			'connectionString' => 'sqlite:'.dirname(__FILE__).'/../data/testdrive.db',
		),*/
		// uncomment the following to use a MySQL database

        'db'=>array(
            'class'=>'application.extensions.PHPPDO.CPdoDbConnection',
            'pdoClass' => 'PHPPDO',
            'connectionString' => 'oci:dbname=//10.0.0.134:1521/oracle',
            'emulatePrepare' => true,
            'username' => 'racing_apps',
            'password' => 'Webonise6186',
            'charset' => 'utf8',
        ),

		'log'=>array(
			'class'=>'CLogRouter',
			'routes'=>array(
				array(
					'class'=>'CFileLogRoute',
					'levels'=>'error, warning',
				),
			),
		),
	),
);