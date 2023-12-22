const Brand = require("../models/brandModel");
const validateMongoDbId = require("../utils/validateMongodbId");
const asyncHandler = require("express-async-handler");

// Create a Brand
const createBrand = asyncHandler(async (req, res) => {
    try {
        const newBrand = await Brand.create(req.body);
        res.json(newBrand);
    } catch (error) {
        throw new Error(error);
    }
});

// Update a Brand
const updateBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const updatedBrand = await Brand.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(updatedBrand);
    } catch (error) {
      throw new Error(error);
    }
});

// Delete a Brand
const deleteBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const deletedBrand = await Brand.findByIdAndDelete(id, req.body, {
        new: true,
      });
      res.json(deletedBrand);
    } catch (error) {
      throw new Error(error);
    }
});

// Get A Brand
const getBrand = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getaBrand = await Brand.findById(id);
        res.json(getaBrand);
    } catch (error) {
        throw new Error(error);
    }
});

// get All Brand
const getAllBrand = asyncHandler(async (req, res) => {
    try {
        const getAllBrand = await Brand.find();
        res.json(getAllBrand);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = { createBrand, updateBrand, deleteBrand, getBrand, getAllBrand };
