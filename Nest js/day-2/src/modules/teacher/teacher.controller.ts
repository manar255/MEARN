import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TeacherService } from './teacher.service';

@Controller('teacher')
export class TeacherController {
  constructor(private teacherService: TeacherService) {}

  @Get()
  getAllTeachers() {
    return this.teacherService.getAllTeachers();
  }

  @Get('/:id')
  getTeacherById(@Param('id') id: any) {
    return this.teacherService.getTeacherById(id);
  }

  @Post()
  addTeacher(@Body() dto: any) {
    return this.teacherService.addTeacher(dto);
  }
  @Delete('/:id')
  deleteTeacher(@Param('id') id: any) {
    return this.teacherService.deleteTeacher(id);
  }
  @Patch('/:id')
  editTeacher(@Param('id') id: any, @Body() dto: any) {
    return this.teacherService.editTeacher(id, dto);
  }
}
