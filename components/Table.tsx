"use client"
//* Next components
import type { NextPage } from 'next'
import "bootstrap/dist/css/bootstrap.min.css"; 
import { useEffect, useState } from 'react';
import  axios  from 'axios'
import { request } from 'http';
import { set } from 'mongoose';

/**
 * @author Maria Meza
 * @name Table
 * @description Table
 */

interface AllTaks {
    AllTaks :{
        responsable:String,
        status:String,
        fechaEntrega:Date, 
        actividad: String
    }, 
    idDoc:string
}

const TableAll: NextPage<AllTaks> = ({ AllTaks }) => {
    const [responsable , setResponsable] = useState('');
    const [status, setStatus]= useState('');
    const [fechaEntrega , setFechaEntrega] = useState('');
    const [actividad , setActividad] = useState('');
    const [idUse , setIdUse] = useState('');

    const data = Array.from(AllTaks);

    const DeleteTaks = async ( e) => {
      
        e.preventDefault()

        try{
            const response = await axios.delete("/api/taks/deleteOne", {id : idUse}  )
            console.log(response)

            console.log({ idUse })

        }catch(err){
            console.log(err)
        }
    }

    const DeleteAllTaks = async () => {
     
        try{
            const response = await axios.delete("/api/taks")
            console.log(response)

        }catch(err){
            console.log(err)
        }
    }

    const handelSumbit = async  () =>{

        try{
            const response = await axios.post("/api/taks",{ 
                responsable: responsable,
                status:status,
                fechaEntrega:fechaEntrega, 
                actividad: actividad
            })
            console.log(response)

        }catch(err){
            console.log(err)
        }
    }

	return (

        
        <div className='table'>

        
            <div className="container-xl">
                
                <div className="table-responsive">
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="table-row">
                                <div className="col-sm-6">
                                    <h2>Actividades a <b>realizar</b></h2>
                                </div>
                                <div className="col-sm-6 table-row-btn ">
                                    <a href="#addEmployeeModal" className="btn btn-success " data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Agregar Actividad</span></a>
                                    <a href="#deleteEmployeeModal" className="btn btn-danger" data-toggle="modal"><i className="material-icons" >&#xE15C;</i> <span>Eliminar todas las Actividades</span></a>						
                                </div>
                            </div>
                        </div>

                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="custom-checkbox">
                                            <input type="checkbox" id="selectAll"/>
                                            <label htmlFor="selectAll"></label>
                                        </span>
                                    </th>
                                    <th>Id</th>
                                    <th>Actividad</th>
                                    <th>Responsable</th>
                                    <th>Fecha de entrega </th>
                                    <th>Estatus</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((items, index )=>(

                                        <tr  key={index}>
                                        <td>
                                            <span className="custom-checkbox">
                                            <input type="checkbox" id="checkbox1" name="options[]" value="1" />
                                            <label htmlFor="checkbox1"></label>
                                            </span>
                                        </td>
                                        <td>{items._id}</td>
                                        <td>{items.actividad}</td>
                                        <td>{items.responsable}</td>
                                        <td>{items.fechaEntrega}</td>
                                        <td>{items.status}</td>
                                        <td>
                                            <a href="#editEmployeeModal"   className="edit" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
                                            <a href="#deleteEmployeeModalIndividual" onClick={(e) => setIdUse(items._id)}className="delete" data-toggle="modal"><i className="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
                                        </td>
                                    </tr>
                                    
                                    ))
                                        
                                }
                            
                               
                            </tbody>
                        </table>

                    
                    </div>
                </div>

            </div>
            {/*Agregar Modal */}
            <div id="addEmployeeModal" onSubmit={handelSumbit} className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form >
                            <div className="modal-header">						
                                <h4 className="modal-title">Agregar tarea</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <div className="form-group">
                                    <label>Actividad</label>
                                    <input type="text" className="form-control" onChange={(e) => setActividad(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label>Responsable</label>
                                    <input type="text" className="form-control"  onChange={(e) => setResponsable(e.target.value)} required />
                                </div>
                                <div className="form-group">
                                    <label>Fecha de Entrega</label>
                                    <input type="date" className="form-control" onChange={(e)=> setFechaEntrega(e.target.value)} required />
                                </div>

                                <div className="form-group">
                                    <label>Estatus</label>
                                    <input type="text" className="form-control" onChange={(e)=> setStatus(e.target.value)} required />
                                </div>
				
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel"/>
                                <input type="submit" className="btn btn-success" value="Add"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Editar Modal */}
            <div id="editEmployeeModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">						
                                <h4 className="modal-title">Editar actividad</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <div className="form-group">
                                    <label>Actividad</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Responsable</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Fecha de entrega </label>
                                    <input type="datwe" className="form-control" required />
                                </div>

                                <div className="form-group">
                                    <label>Estatus</label>
                                    <input type="text" className="form-control" required />
                                </div>
                               				
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-info" value="Save" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Eliminar modal */}

            <div id="deleteEmployeeModal" onSubmit={DeleteAllTaks} className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">						
                                <h4 className="modal-title">Eliminar actividad</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <p>¿Esta seguro de querer eliminar?</p>
                                <p className="text-warning"><small>Esta accion no tiene retorno.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-danger" value="Delete" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        {/* Eliminar modal individual */}
            <div id="deleteEmployeeModalIndividual" onSubmit={DeleteTaks} className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form>
                            <div className="modal-header">						
                                <h4 className="modal-title">Eliminar actividad</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <p>¿Esta seguro de querer eliminar?</p>
                                <p className="text-warning"><small>Esta accion no tiene retorno.</small></p>
                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancel" />
                                <input type="submit" className="btn btn-danger" value="Delete" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>

	)

}

export default TableAll