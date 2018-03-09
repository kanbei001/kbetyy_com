<?php
namespace Home\Controller;
use Think\Controller;
class SystemController extends Controller {
    /*
     * 构造函数
     */
    public function _initialize(){
        set_time_limit(15); //设置脚本最大运行时间
        if (!session('admin_id')) {
            $this->redirect('Login/index');
        }
    }
}

