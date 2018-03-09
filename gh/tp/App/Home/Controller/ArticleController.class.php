<?php
namespace Home\Controller;
use Think\Controller;
class ArticleController extends SystemController {
    //已处理列表
    public function index(){
        $User = M('registration'); // 实例化registration对象
        $count      = $User->where(array('status'=>1))->count();// 查询满足要求的总记录数
        $Page       = new \Think\Page($count,10);// 实例化分页类 传入总记录数和每页显示的记录数(25)
        $show       = $Page->show();// 分页显示输出
        // 进行分页数据查询 注意limit方法的参数要使用Page类的属性
        $list = $User->where('status=1')->order('id asc')->limit($Page->firstRow.','.$Page->listRows)->select();
        $this->assign('list',$list);// 赋值数据集
        $this->assign('page',$show);// 赋值分页输出
        $this->display('article-list');
    }
    //查看
    public function article_detail(){
       $table = M('registration');
       $id = $_GET['id'];
       $content = $table->where(array('id'=>$id))->field('content')->find();
       $this->assign('content',$content);
       $this->display('article-detail');
    }
    //回收站列表
    public function recycle(){
        $User = M('registration'); // 实例化registration对象
        $count      = $User->where(array('status'=>2))->count();// 查询满足要求的总记录数
        $Page       = new \Think\Page($count,10);// 实例化分页类 传入总记录数和每页显示的记录数(25)
        $show       = $Page->show();// 分页显示输出
        // 进行分页数据查询 注意limit方法的参数要使用Page类的属性
        $list = $User->where('status=2')->order('id asc')->limit($Page->firstRow.','.$Page->listRows)->select();
        $this->assign('list',$list);// 赋值数据集
        $this->assign('page',$show);// 赋值分页输出
        $this->display('recycle-article-list');
    }
    //添加回收站
    public function article_delete(){
       $table = M('registration');
       $id = $_POST['id'];
       $del_result = $table->where(array('id'=>$id))->save(array('status'=>'2'));
       if($del_result) {
           echo 1;
       }else{
           echo 0;
       }
    }
    //删除
    public function delete() {
        $table = M('registration');
        $id = $_POST['id'];
        $del_result = $table->where(array('id'=>$id))->delete();
        if($del_result) {
            echo 1;
        }else{
            echo 0;
        }
    }
    //未处理->已处理
    public function stop(){
       $table = M('registration');
       $id = $_GET['id'];
       $del_result = $table->where(array('id'=>$id))->save(array('status'=>1));
       if($del_result) {
           echo 1;
       }else{
           echo 0;
       }
    }
    //已处理->未处理
    public function start(){
       $table = M('registration');
       $id = $_GET['id'];
       $del_result = $table->where(array('id'=>$id))->save(array('status'=>0));
       if($del_result) {
           echo 1;
       }else{
           echo 0;
       }
    }
    //未处理挂号列表
    public function ready(){
        $User = M('registration'); // 实例化registration对象
        $count      = $User->where(array('status'=>0))->count();// 查询满足要求的总记录数
        $Page       = new \Think\Page($count,10);// 实例化分页类 传入总记录数和每页显示的记录数(25)
        $show       = $Page->show();// 分页显示输出
        // 进行分页数据查询 注意limit方法的参数要使用Page类的属性
        $list = $User->where('status=0')->order('id desc')->limit($Page->firstRow.','.$Page->listRows)->select();
        $this->assign('list',$list);// 赋值数据集
        $this->assign('page',$show);// 赋值分页输出
        $this->display('ready-article-list');
    }
}
