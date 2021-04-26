import { IsString, IsUUID } from 'class-validator'

export class CreateCourseDto {
  @IsString()
  coursename: string;

  iduser:string;
}