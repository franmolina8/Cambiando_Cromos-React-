const Mercado = require("../models/mercado.models")
const { deleteFile } = require("../../middlewares/deleteFile");
const httpStatusCode = require("../../utils/httpstatuscode");
  

  const getAllMercado = async(req, res, next) => {

    try {

      const allMercado = await Mercado.find().populate("user1Id").populate("user2Id").populate("cromo1Id").populate("cromo2Id").populate("wanted")

      return res.json({

        status: 200,
        message: httpStatusCode[200],
        Mercado: allMercado

      })
      
    } catch (error) {
      return next(error);
      
    }

  };

  const getMercadoID = async (req, res, next) => {


    try {
      const id = req.params.id;
      const mercadoByID = await Mercado.findById(id).populate("user1Id").populate("user2Id").pupulate("crommo1Id").populate("cromo2Id")

      return res.json({
        status: 200,
        message: httpStatusCode[200],
        Mercado: mercadoByID,
      });

    } catch (error) {
      return next(error);
      
    }

  }

  const deleteMercado = async(req, res, next) => {
    try {
      const { id} = req.params;

      const mercadoBorrado = await Mercado.findByIdAndDelete(id);

      return res.status(200).json(mercadoBorrado)
      
    } catch (error) {
      return next(error);
      
    }
  }

  

 

  const createMercado = async (req, res, next) => {
    try {
      const newMercado = new Mercado(req.body);
      const createdMercado = newMercado.save();
      return res.json({
        status: 201,
        message: httpStatusCode[201],
        createdMercado: newMercado,
      });
    } catch (error) {
      return next(error);
    }
  };

 

  const patchMercado = async (req, res, next) => {
    try {
      const { id } = req.params;
      const patchMercado = new Mercado(req.body);
      patchMercado._id = id;
      const mercadoData = await Mercado.findById(id);
  
      
      const mercadoDB = await Mercado.findByIdAndUpdate(id, patchMercado);
      return res.status(200).json({ nuevo: patchMercado, vieja: mercadoData });
    } catch (error) {
      return next(error);
    }
  };


  

  module.exports = { getAllMercado, getMercadoID, deleteMercado, createMercado, patchMercado}