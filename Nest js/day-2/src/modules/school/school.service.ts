import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { School } from 'src/models/school.model';
import { Teacher } from 'src/models/teacher.model';

@Injectable()
export class SchoolService {
  constructor(
    @InjectModel(School.name) private schoolModel: Model<School>,
    @InjectModel(Teacher.name) private teacherModel: Model<Teacher>,
  ) {}
  getAllSchools() {
    return this.schoolModel.find();
  }
  getSchoolById(id) {
    return this.schoolModel.findById(id);
  }
  addSchool(dto) {
    const newSchool = new this.schoolModel(dto);
    newSchool.save();
    return newSchool;
  }
  async deleteSchool(id) {
    return await this.schoolModel.findByIdAndDelete(id);
  }
  editSchool(id, dto) {
    return this.schoolModel.findByIdAndUpdate(id, dto);
  }
async getSchoolAnalytics() {
    const mostTeachers = await this.teacherModel.aggregate([
        { $group: { _id: '$school', count: { $sum: 1 } } },
        {
            $lookup: {
                from: 'schools',
                localField: '_id',
                foreignField: '_id',
                as: 'school',
            },
        },
        { $unwind: '$school' },
        {
            $project: {
                _id: '$school._id',
                schoolName: '$school.name',
                count: 1,
            },
        },
        { $sort: { count: -1 } },
        { $limit: 1 },
    ]);

    const leastTeachers = await this.teacherModel.aggregate([
        { $group: { _id: '$school', count: { $sum: 1 } } },
        {
            $lookup: {
                from: 'schools',
                localField: '_id',
                foreignField: '_id',
                as: 'school',
            },
        },
        { $unwind: '$school' },
        {
            $project: {
                _id: '$school._id',
                schoolName: '$school.name',
                count: 1,
            },
        },
        { $sort: { count: 1 } },
        { $limit: 1 },
    ]);

    return {
        mostTeachers,
        leastTeachers,
    };
}
}
