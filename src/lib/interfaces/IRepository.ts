
/// <reference path="../../../typings/tsd.d.ts" />

export interface IRepository
{
    repositoryType:string;
    isValid():Promise<boolean>;
    add(fileNames:string[]):Promise<any>;
    commit(commitMessage:string):Promise<any>;
    tag(tag:string):Promise<any>;
    push(tagsOnly:boolean):Promise<any>;
}


