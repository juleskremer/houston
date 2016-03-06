import {Component, Pipe, PipeTransform, OnInit} from 'angular2/core';

@Pipe({name: 'values'})
export class ValuesPipe implements PipeTransform {
    transform(value: any, args?: any[]): any[] {
        // create instance vars to store keys and final output
        let keyArr = Object.keys(value),
            dataArr = [];

        // loop through the object,
        // pushing values to the return array
        keyArr.forEach(key => {
            dataArr.push(value[key]);
        });

        // return the resulting array
        return dataArr;
    }
}