import { Controller, Body, Get, Post, Param , ParseUUIDPipe } from '@nestjs/common';
import { CreateCourseDto } from './dto/create.course.dto'
import { CourseService } from './course.service'
import { Course } from './model/course.model'

@Controller('/users/:iduser/course/')
export class CourseController {
  constructor( private courseService: CourseService){}

  @Post()
  async createCourse(@Param('iduser') iduser:string, @Body() createCourseDto: CreateCourseDto): Promise<void>{
    return this.courseService.create(iduser,createCourseDto);
  }

  @Get()
  async findAllCourses(@Param('iduser') iduser:string): Promise<Course[]> {
    return this.courseService.findAll(iduser);
  }

  @Get(':courseid')
  async findOneCourses(@Param('courseid') courseid:string): Promise<Course[]> {
    return this.courseService.findOne(courseid);
  }
}
