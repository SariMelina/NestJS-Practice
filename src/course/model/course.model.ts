export class Course {
  readonly courseid: string;
  readonly coursename: string;
  readonly iduser:string;

  constructor(id:string, name:string, iduser:string){
    this.courseid = id;
    this.coursename = name;
    this.iduser = iduser;
  }
}