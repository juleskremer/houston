import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({name: 'objToArr'})
export class ObjToArr implements PipeTransform {
   transform(object:any) {
    var newArray = []
    for (var key in object) {
        newArray.push(object[key]);
    }
    return newArray;
  }
}
