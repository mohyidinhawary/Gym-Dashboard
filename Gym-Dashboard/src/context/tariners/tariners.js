import { createContext, useState, useEffect, Children } from 'react';
import {columns} from "../../constants/trainers-table-info"
import { TrainersService } from '../../services/trainer/trainers';
export const TrainersContext=createContext({
columns,

});

export const TrainersProvider=({Children})=>{
const [Trainers,setTrainers]=useState([]);

useEffect(()=>{
const FetshTrainers= async ()=>{
    try{
        const response=await TrainersService.getTrainers();
        console.log(response.data);
    }
catch(err){
console.log(err)
}
}
FetshTrainers();
},[]);


}