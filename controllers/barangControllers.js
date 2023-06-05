import db from "../models/index.js";

const Barang = db.Barang;

export const getAllBarang = async (req, res) => {
  try {
    const data = await Barang.findAll();
    res.status(200).json({ code: 200, status: true, data });
  } catch (error) {
    console.log(error);
  }
};
export const getBarangByID = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Barang.findOne({
      where: { id },
    });
    res.status(200).json({ code: 200, status: true, data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createBarang = async (req, res) => {
  const { nama, satuan, harga } = req.body;
  try {
    await Barang.create({
      nama,
      satuan,
      harga,
    });
    res.status(200).json({ code: 200, msg: "Create Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};
export const updateBarang = async (req, res) => {
  const { id } = req.params;
  const { nama, satuan, harga } = req.body;

  try {
    await Barang.update(
      {
        nama,
        satuan,
        harga,
      },
      {
        where: { id },
      }
    );
    res.status(200).json({ code: 200, msg: "Update Successfully" });
  } catch (error) {
    console.log(error.message);
  }
};
export const deleteBarang = async (req, res) => {
  const { id } = req.params;
  try {
    await Barang.destroy({
      where: { id },
    });
    res.status(200).json({ msg: "Barang Deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
