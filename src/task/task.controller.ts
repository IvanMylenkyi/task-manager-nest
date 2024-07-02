import { Body, Controller, Get, Param, ParseEnumPipe, Patch, Post, UsePipes, ValidationPipe, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { pipe } from 'rxjs';
import { TaskDto } from './task.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}


  @Get()
  async getTasks(){
    return this.taskService.getAll()
  }

  @Get(':id')
  async getTask(@Param('id') id: string){
    return this.taskService.getOne(id)
  }

  @Post()
  @UsePipes(new ValidationPipe())

  async create(@Body() dto: TaskDto){
    return this.taskService.create(dto)
  }


  @Patch(':id')
  async complete(@Param('id') id: string){
    return this.taskService.complete(id)
  }

  @Patch(':id/e')
  async edit(@Param('id') id: string, @Body() dto: TaskDto){
    return this.taskService.edit(id, dto)
  }

  @Delete(':id') 
  delete(@Param('id') id: string){
    return this.taskService.delete(id)
    }
}


