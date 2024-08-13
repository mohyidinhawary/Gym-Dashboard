import BaseService from "../httprequest";
class TrainersService extends BaseService{
    constructor(){
        super("https://jsonplaceholder.typicode.com/users")
    }
    getTrainers(){
        return this.get("/users")
    }
   

}
const TrainersService=new TrainersService();

export {TrainersService}