import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MsgService {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  private errorMap = new Map<string, string>([['401', `你的登录信息过期啦 刷新一下吧`], ['500', `服务器傻啦 去问问开发部吧`], ['516O', `无效的登录信息`], ['JQWV', `表单填错啦(不应该出错)`], ['RRKY', `你没给文件嘞`], ['BPS8', `不存在这个Leaf`], ['0GB9', `访问不了这个Leaf....`], ['VT39', `你已经参加过了`], ['L5OM', `目前的状态不支持这种操作哦`], ['CWAI', `你不能接这个呢... (因为不在对应的部门`], ['C3D8', `不支持这种文件格式呢`], ['84RX', `我也不知道这是啥东西 你看看是不是文件坏了`], ['3MVG', `你要找的用户不存在哦`], ['JLKC', `已经存在这个用户了`], ['I2NT', `访问不了这个用户...`], ['DZ7H', `这个口令太~~弱啦`], ['QNL2', `这个口令太常见了 我都见过啦`], ['P1GU', `口令太短了 至少要8位哦`], ['8DTM', `没有这个项目呢...`], ['QUSO', `已经有这个项目了哦`], ['25HC', `访问不了这个项目...`], ['GT7K', `没有你要接的这个分工`], ['9NZ5', `Role之前已经初始化过了`], ['4JZE', `来源很明显填错了嘛`], ['ABE1', `找不到标题 (摊手`], ['93M2', `已经被预定了哦`], ['JZI0', `你之前已经预定过这个项目了`], ['4J67', `你不能取消预定`]])

  show_msg(code: string) {
    let msg = ''
    if (this.errorMap.has(code)) {
      msg = this.errorMap.get(code)
    } else {
      msg = `我也不知道出什么错了 问问开发部的人吧 (${code})`
    }
    this._snackBar.open(msg, '知道啦', {
      duration: 7000,
    });
  };

  private translateLeafState(state: string): string {
    if (state == 'waiting') {
      return '等待'
    }
    if (state == 'droped_e') {
      return '过期'
    }
    if (state == 'droped_f') {
      return '超时'
    }
    if (state == 'droped_m') {
      return '取消'
    }
    if (state == 'normal') {
      return '施工中'
    }
    if (state == 'paused_fin') {
      return '完成'
    }
    if (state == 'paused_tmp') {
      return '暂停'
    }
  }
}
