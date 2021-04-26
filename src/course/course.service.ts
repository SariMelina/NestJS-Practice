import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid'
import { CreateCourseDto } from './dto/create.course.dto'
import { Course } from './model/course.model'

const courses: Course[] = []

@Injectable()
export class CourseService {
  public create(ayuda:string, courseDto: CreateCourseDto): void{
    courses.push(new Course(uuidv4(), courseDto.coursename, ayuda))
  }
  public findAll(param:string):Course[]{        
    let ayuda = courses.map((x) => {      
      if(x.iduser === param){
        return x
      }
    })
    return ayuda
  }

  public findOne(param:string):Course[]{
    let ayuda = courses.map((x) => {      
      if(x.courseid === param){
        return x
      }
    })
    return ayuda
  }
}