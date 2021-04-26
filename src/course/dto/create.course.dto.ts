import { IsString } from 'class-validator'

export class CreateCourseDto {
  @IsString()
  coursename: string;

  @IsString()
  iduser:string;
}