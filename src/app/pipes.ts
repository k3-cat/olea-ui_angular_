import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'leafState' })
export class LeafStatePipe implements PipeTransform {
    transform(value: string): string {
        if (value == 'waiting') {
            return '等待'
        }
        if (value == 'droped_e') {
            return '过期'
        }
        if (value == 'droped_f') {
            return '超时'
        }
        if (value == 'droped_m') {
            return '取消'
        }
        if (value == 'normal') {
            return '施工中'
        }
        if (value == 'paused_fin') {
            return '完成'
        }
        if (value == 'paused_tmp') {
            return '暂停'
        }
    }
}

@Pipe({ name: 'depName' })
export class DepNamePipe implements PipeTransform {
    transform(value: string): string {
        if (value == 'd30') {
            return '科普'
        }
        if (value == 'd40') {
            return '翻译'
        }
        if (value == 'd51') {
            return '配音'
        }
        if (value == 'd52') {
            return '英配'
        }
        if (value == 'd60') {
            return '设计'
        }
        if (value == 'd71') {
            return '音频'
        }
        if (value == 'd72') {
            return '字幕'
        }
        if (value == 'd73') {
            return '视频'
        }
    }
}
