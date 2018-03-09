<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        if(!session('admin_id')){
               $this->redirect('Login/index');
              exit;
        }else{
              $this->display();
        }

    }
    
    /*
     *提交预约;
     * return bool;
     */
    public function commont(){
        echo header("Access-Control-Allow-Origin:*");
        $table = M("registration");
        if(IS_POST) {
            $data['name']        = $_POST['name'];
            $data['sex']         = $_POST['sex']; 
            $data['age']         = $_POST['age']; 
            $data['tel']         = $_POST['tel'];
            $data['tel_hiden']   = substr_replace($data['tel'],'****',3,4);
            $data['ks']          = $_POST['ks1'];
            $data['content']     = $_POST['zzms']; 
            $data['whereform']   = $_POST['cnmwda'];
            $data['date']        = $_POST['time'];
            $data['status']        = 0;
            $result = $table->data($data)->add();
            if($result) {
                unset($data);
                $data = $table->order("id desc")->limit(20)->select();
                $data['status'] = 1;
                $this->jsonReturn($data);
            }else{
               $data['status'] = 0;
               $this->jsonReturn($data);
            }
        }
    }
    
    /*
     * 预约初始代列表
     */
    public function appointment_list() {
        $table = M('registration');
        $data = $table->order("id desc")->limit(20)->select();
        $data['status'] = 1;
        $this->jsonReturn($data);
    }
    /*
    *json格式
    */
    public function jsonReturn($data) {
        header('Content-Type:application/json; charset=utf-8');
        exit(json_encode($data));
    }
}