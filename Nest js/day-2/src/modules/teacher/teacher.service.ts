import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Teacher } from 'src/models/teacher.model';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel(Teacher.name) private teacherModel: Model<Teacher>,
  ) {}
  getAllTeachers() {
    return this.teacherModel.find();
  }
  getTeacherById(id) {
    return this.teacherModel.findById(id);
  }
  addTeacher(dto) {
    const newTeacher = new this.teacherModel(dto);
    newTeacher.save();
    return newTeacher;
  }
  async deleteTeacher(id) {
    return await this.teacherModel.findByIdAndDelete(id);
  }
  editTeacher(id, dto) {
    return this.teacherModel.findByIdAndUpdate(id, dto);
  }
}
