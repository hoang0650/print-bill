const router = require("express").Router();

const scheduleModel = require("../models/schedule");
const billModel = require("../models/bill");
const seatModel = require("../models/seat");
const typeModel = require("../models/type");
const trainModel = require("../models/train");
const stationModel = require("../models/station");
router.get("/station", async (req, res) => {
  try {
    return res.json({
      status: true,
      data: await stationModel.find(),
    });
  } catch (err) {
    console.log.log(err);
    return res.json({
      status: false,
      message: err.toString(),
    });
  }
});

router.get("/history", async (req, res) => {
  try {
    const { search } = req.query;
    const searchQuery = !search
      ? {}
      : {
          status: { $ne: false },
          $or: [
            {
              phone: new RegExp(search, "gi"),
            },
            {
              name: new RegExp(search, "gi"),
            },
            {
              start: new RegExp(search, "gi"),
            },
            {
              start_code: new RegExp(search, "gi"),
            },
            {
              end: new RegExp(search, "gi"),
            },
            {
              end_code: new RegExp(search, "gi"),
            },
          ],
        };
    return res.json({
      status: true,
      data: await billModel
        .find({
          ...searchQuery,
        })
        .limit(10)
        .skip((req.query.page - 1) * 10),
    });
  } catch (err) {
    console.log.log(err);
    return res.json({
      status: false,
      message: err.toString(),
    });
  }
});

router.get("/count-bill", async (req, res) => {
  try {
    const { search } = req.query;
    const searchQuery = !search
      ? {}
      : {
          status: { $ne: false },
          $or: [
            {
              phone: new RegExp(search, "i"),
            },
            {
              name: new RegExp(search, "i"),
            },
            {
              start: new RegExp(search, "i"),
            },
            {
              start_code: new RegExp(search, "i"),
            },
            {
              end: new RegExp(search, "i"),
            },
            {
              end_code: new RegExp(search, "i"),
            },
          ],
        };
    return res.json({
      status: true,
      data: await billModel.countDocuments({
        ...searchQuery,
      }),
    });
  } catch (err) {
    console.log.log(err);
    return res.json({
      status: false,
      message: err.toString(),
    });
  }
});

router.post("/bill", async (req, res) => {
  try {
    const count = await billModel.count();
    const newBill = new billModel({ ...req.body, sequence: count + 1 });
    const result = await newBill.save();
    return res.json({
      status: true,
      data: result._id,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      status: false,
      message: err.toString(),
    });
  }
});

router.delete("/bill", async (req, res) => {
  try {
    const { id } = req.body;
    const check = await billModel.findById(id);
    if (!check)
      return res.json({
        status: false,
        message: "Không thể tìm thấy thông tin vé",
      });
    await billModel.deleteOne({ _id: id });
    return res.json({
      status: true,
    });
  } catch (err) {
    console.log(err);
    return res.json({
      status: false,
      message: err.toString(),
    });
  }
});

router.get("/bill/ticket_code", async (req, res) => {
  try {
    const lastBill = await billModel.findOne({}).sort({ sequence: -1 });
    const lastCode = lastBill ? lastBill.sequence + 1 : 1;
    var str = "" + lastCode;
    var pad = "000000";
    var code = pad.substring(0, pad.length - str.length) + str;
    return res.json({
      status: true,
      data: code,
    });
  } catch (err) {
    console.log.log(err);
    return res.json({
      status: false,
      message: err.toString(),
    });
  }
});

router.get("/schedule", async (req, res) => {
  try {
    return res.json({ status: true, data: await scheduleModel.find() });
  } catch (err) {
    console.log.log(err);
    return res.json({
      status: false,
      message: err.toString(),
    });
  }
});

router.get("/train", async (req, res) => {
  try {
    return res.json({ status: true, data: await trainModel.find() });
  } catch (err) {
    console.log.log(err);
    return res.json({
      status: false,
      message: err.toString(),
    });
  }
});

router.get("/seat", async (req, res) => {
  try {
    return res.json({ status: true, data: await seatModel.find() });
  } catch (err) {
    console.log.log(err);
    return res.json({
      status: false,
      message: err.toString(),
    });
  }
});

router.get("/type", async (req, res) => {
  try {
    return res.json({
      status: true,
      data: await typeModel.aggregate([
        {
          $lookup: {
            from: "seats",
            localField: "_id",
            foreignField: "type_id",
            as: "seatDetail",
          },
        },
        {
          $unwind: "$seatDetail",
        },
      ]),
    });
  } catch (err) {
    console.log.log(err);
    return res.json({
      status: false,
      message: err.toString(),
    });
  }
});
module.exports = router;
