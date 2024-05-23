import { Injectable } from '@nestjs/common';

/*
@Injectable(): Decorador que nos indica que podemos inyectar código en otras partes de la aplicacion, así que las funciones creadas dentro de la clase 'TasksService' va a poder ser reutilizada. Un ejemplo de lógica a reutilizar pueden ser funciones que consulten una base de datos
*/

@Injectable()
export class TasksService {

    //METODO
    getAllTasks(){
        //buscar en una bd
        //peticiona otro backend o api
        return ['task 1', 'task 2', 'task 3']
    }

    createTask(){
        return 'Creando tareas'
    }

    updateTask(){
        return 'Actualizando tareas'
    }

    deleteTask(){
        return 'Eliminando tareas'
    }

    updateTaskStatus(){
        return 'Actualizando el estado de una tarea'
    }
}
