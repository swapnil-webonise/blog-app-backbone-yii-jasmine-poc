<?php

return CMap::mergeArray(
	require(dirname(__FILE__).'/main.php'),
	array(
		'components'=>array(
			'fixture'=>array(
				'class'=>'system.test.CDbFixtureManager',
			),
			/* uncomment the following to provide test database connection
			'db'=>array(
				'connectionString'=>'DSN for test database',
			),
			*/
            'db'=>array(
                'class'=>'application.extensions.PHPPDO.CPdoDbConnection',
                'pdoClass' => 'PHPPDO',
                'connectionString' => 'oci:dbname=//10.0.0.134:1521/oracle',
                'emulatePrepare' => true,
                'username' => 'racing_apps',
                'password' => 'Webonise6186',
                'charset' => 'utf8',
            ),
		),
	)
);
