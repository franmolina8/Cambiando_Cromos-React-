const { deleteFile } = require("../../middlewares/deleteFile");
const Cromo = require("../models/cromos.models");
const HTTPSTATUSCODE = require("../../utils/httpStatusCode")



const getAllCromos = async (req, res, next) => {
  try {
    const allCromos = await Cromo.find();
    return res.json({
      status: 200,
      message: HTTPSTATUSCODE[200],
      Cromo: allCromos,
    });
  } catch (error) {
    return next(error);
  }
};

const getCromoByID = async (req, res, next) => {
    try {
      const id = req.params.id;
      const cromoByID = await Cromo.findById(id);
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        Cromo: cromoByID,
      });
    } catch (error) {
      return next(error);
    }
  };

  const getCromoByNombre = async (req, res, next) => {
    try {
      const {nombre} = req.params;

      const cromoByNombre = await Cromo.findOne({nombre : nombre});
      return res.json({
        status: 200,
        message: HTTPSTATUSCODE[200],
        cromo: cromoByNombre,
      });
    } catch (error) {
      return next(error);
    }
  };

  const createCromos = async (req, res, next) => {
    console.log(req.body);
    try {
      const newCromos = new Cromo(req.body);
      if (req.file) {
        newCromos.imagen = req.file.path;
      }
      const createdCromos = await newCromos.save();
      return res.json({
        status: 201,
        message: HTTPSTATUSCODE[201],
        cromo: createdCromos,
      });
    } catch (error) {
      return next(error);
    }
  };

  const deleteCromos = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const cromoBorrado = await Cromo.findByIdAndDelete(id);
  
      return res.status(200).json(cromoBorrado);
    } catch (error) {
      return next(error);
    }
  };

  const patchCromos = async (req, res, next) => {
    try {
      const { id } = req.params;
  
      const patchCromo = new Cromo(req.body);  
      patchCromo._id = id;
      const cromoData= await Cromo.findByIdAndUpdate(id,patchCromo)

    
      if (cromoData.imagen) {
        deleteFile(cromoData.imagen);
        }

      if (req.files.image) {
        patchCromo.imagen = req.files.image[0].path;
      }

      
      if (cromoData.imagenback) {
        deleteFile(cromoData.imagenback);
        }

      if (req.files.imagenback) {
        patchCromo.imagenback = req.files.imagenback[0].path;
      }
  
    const CromoDB = await Cromo.findByIdAndUpdate(id, patchCromo);
      
      return res.status(200).json({ nuevo: CromoDB, vieja: cromoData });
    } catch (error) {
      return next(error);
    }
  };


  module.exports = {getAllCromos, getCromoByID, getCromoByNombre, createCromos, deleteCromos, patchCromos}