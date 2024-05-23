import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { UsersController } from './users/users.controller';
import { TasksModule } from './tasks/tasks.module';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProjectsModule, TasksModule, UsersModule],

  controllers: [UsersController],

  providers: [UsersService],
})
export class AppModule {}
