import { Router } from "express"

interface IRouter{
     routes(): void
}

abstract class BaseRoutes implements IRouter{
     public router: Router;

     constructor(){
          this.router = Router()
          this.routes()
     }
     
     abstract routes(): void 

}

export default BaseRoutes;