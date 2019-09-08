import { Pipe, PipeTransform } from '@angular/core';
import { GlobalService } from './global.service';

@Pipe({ name: 'pinkName' })
export class PinkName implements PipeTransform {
    constructor(private g: GlobalService) { }

    transform(value: string): string {
        return this.g.pinks.filter(h => h.id == value)[0].name
    }
}
