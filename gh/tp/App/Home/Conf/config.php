<?php
return array(
	//'配置项'=>'配置值'
    /* 数据库设置 */
    'DB_TYPE'               =>  'mysql',     // 数据库类型
    'DB_HOST'               =>  '127.0.0.1', // 服务器地址
    'DB_NAME'               =>  'kb123kb123',          // 数据库名
    'DB_USER'               =>  'kb123kb123',      // 用户名
    'DB_PWD'                =>  'kb123kb123',          // 密码
    'DB_PORT'               =>  '3306',        // 端口
    'DB_PREFIX'             =>  '',    // 数据库表前缀
    
    'TMPL_PARSE_STRING'  =>array(  
        '__URL__'   => __CONTROLLER__,//不懂的看\ThinkPHP\Library\Behavior\ContentReplaceBehavior.class.php
        '__PUBLIC__'=> __ROOT__."/Public",//公共文件侠
        '__MAR__' => '/Public/article/', // 文章主图路径
        '__CAR__' => '/Public/adv/upload/',//主页图片轮播路径
        '__SUC__' => '/Public/home/images/',//
    )
);


 // http://kb.whwjr.vip/gh/tp/Public/static/h-ui/css/H-ui.min.css 
  //http://kb.whwjr.vip/gh/tp/public/static/h-ui/css/H-ui.min.css
