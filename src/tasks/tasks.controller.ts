import { Controller, Get, Post, Put, Delete, Patch } from '@nestjs/common'; 
import { TasksService } from './tasks.service';
/* { TasksService }: La clase que proporciona la lógica de negocio para manipular las tareas */

/*
@Controller({}): Decorador que define un controlador en NestJS. Puede tomar opciones de configuración, como el prefijo de ruta, pero en este caso, no se proporciona ninguna opción.
*/

@Controller('/api')
export class TasksController {

    //PROPIEDADES
    /*
    Para poder usar las funciones definidas en la clase 'TaskService', debemos primero inyectarlas en la clase 'TaskController', para ello creamos una variable llamada 'tasksService' del tipo de la clase importada 'TasksService' 
    tasksService: Es una propiedad de la clase 'TasksController'. Su tipo es 'TasksService', lo que significa que almacenará una instancia de la clase 'TasksService'
    */
   /*La clase 'TaskController' tiene como propiedad un objeto llamado 'taskService' instanciado de la clase 'TaskService' */
    tasksService: TasksService

    //CONSTRUCTOR
    /*
    constructor: Es un método especial que se ejecuta cuando se crea una nueva instancia de la clase TasksController. 
    tasksService: Es un parámetro del constructor. Recibe una instancia de TasksService.
    this.tasksService = tasksService: Asigna la instancia recibida al campo tasksService de la clase. Esto permite que todos los métodos de TasksController accedan a los métodos y propiedades de TasksService usando this.tasksService.
    */
   /*La funcion constructor recibe un valor como parámetro llamado 'tasksService' de tipo TaskService (al decir que es de tipo 'TasksService' estamos indicando que es una instancia de la clase 'TasksService'), este valor se asigna a la propiedad del objeto de la clase 'TasksController' llamada 'tasksService'. Es decir, todos los objetos instanciados de la clase 'TasksController' tendrán en automático el valor del argumento 'tasksService' asignado. */
    constructor(tasksService: TasksService){
        this.tasksService = tasksService
    }
    /*
    Una forma de resumir este codigo:
    tasksService: TasksService
    constructor(tasksService: TasksService){
        this.tasksService = tasksService
    }

    Es escribiendo esto: 
    constructor(private tasksService: TasksService){      
    }
    */

    //METODOS
    /* @Get('/tasks'): Este decorador indica que este método manejará las solicitudes HTTP GET a la ruta '/tasks' */
    /*
    this.tasksService.getAllTasks(): Al instanciar un objeto de la clase 'TasksController' este tendrá como método una funcion llamada 'getAllTasks'. Esta funcion llama a la propiedad del objeto de 'TasksController' llamado 'tasksService' que a su vez es un objeto instanciado de 'TasksService', lo que le da acceso a los métodos definidos en la clase 'TasksService'
    */
    @Get('/tasks')
    getAllTasks(){
        return this.tasksService.getAllTasks()
    
    }

    @Post('/tasks')
    createTask(){
        return this.tasksService.createTask()
    }
    /*Actualiza todo el objeto */
    @Put('/tasks')
    updateTask(){
        return this.tasksService.updateTask()
    }
    @Delete('/tasks')
    deleteTask(){
        return this.tasksService.deleteTask()
    }

    /*Actualiza parcialmente el objeto */
    @Patch('/tasks')
    updateTaskStatus(){
        return this.tasksService.updateTaskStatus()
    }
}
