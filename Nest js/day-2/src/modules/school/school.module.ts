import { Module } from '@nestjs/common';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';
import { MongooseModule } from '@nestjs/mongoose';
import { School, SchoolSchema } from 'src/models/school.model';
import { Teacher, TeacherSchema } from 'src/models/teacher.model';

@Module({
  imports:[MongooseModule.forFeature([{ name: School.name, schema: SchoolSchema }]),MongooseModule.forFeature([{ name: Teacher.name, schema: TeacherSchema }])],

  controllers: [SchoolController],
  providers: [SchoolService]
})
export class SchoolModule {}
