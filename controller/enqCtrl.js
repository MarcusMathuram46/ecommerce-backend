const Enquiry = require("../models/enqModel");
const validateMongoDbId = require("../utils/validateMongodbId");
const asyncHandler = require("express-async-handler");

// create a new Enquiry
const createEnquiry = asyncHandler(async (req, res) => {
    try {
        const newEnquiry = await Enquiry.create(req.body);
        res.json(newEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

// Update a Enquiry
const updateEnquiry = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const updatedEnquiry = await Enquiry.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.json(updatedEnquiry);
    } catch (error) {
      throw new Error(error);
    }
});

// Delete a Enquiry
const deleteEnquiry = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
      const deletedEnquiry = await Enquiry.findByIdAndDelete(id, req.body, {
        new: true,
      });
      res.json(deletedEnquiry);
    } catch (error) {
      throw new Error(error);
    }
});

// Get a single Enquiry
const getEnquiry = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const getaEnquiry = await Enquiry.findById(id);
        res.json(getaEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

// Get All Enquiries
const getAllEnquiry = asyncHandler(async (req, res) => {
    try {
        const getAllEnquiry = await Enquiry.find();
        res.json(getAllEnquiry);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports = { createEnquiry, updateEnquiry, deleteEnquiry, getEnquiry, getAllEnquiry };
