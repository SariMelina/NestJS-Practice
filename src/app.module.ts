import { CourseModule } from './course/course.module';
/* import { CourseController } from './course/course.controller';
import { CourseService } from './course/course.service'; */
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
        CourseModule, UserModule, ],
  controllers: [
        AppController],
  providers: [
        AppService],
})
export class AppModule {}
