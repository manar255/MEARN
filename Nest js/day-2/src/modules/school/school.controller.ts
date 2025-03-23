import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { SchoolService } from './school.service';

@Controller('school')
export class SchoolController {
    constructor(private schoolService: SchoolService) {}

    @Get()
    getAllSchools() {
        return this.schoolService.getAllSchools();
    }

    @Get('/analytics')
    getSchoolAnalytics(){
        return this.schoolService.getSchoolAnalytics()
    }
    @Get('/:id')
    getSchoolById(@Param('id') id: any) {
        return this.schoolService.getSchoolById(id);
    }

    @Post()
    addSchool(@Body() dto: any) {
        return this.schoolService.addSchool(dto);
    }
    @Delete('/:id')
    deleteSchool(@Param('id') id: any) {
        return this.schoolService.deleteSchool(id);
    }
    @Patch('/:id')
    editSchool(@Param('id') id: any, @Body() dto: any) {
        return this.schoolService.editSchool(id, dto);
    }
}
