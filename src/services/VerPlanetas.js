import {supabase} from '../lib/supabase';

export const VerPlanetas=async()=>{
    const {tabla,error}= await supabase
    .from('Planetas')
    .select('*')
    if(error){
        console.error('No se logro traer la Tabla Planetas')
        throw error
    }
    return tabla;
}