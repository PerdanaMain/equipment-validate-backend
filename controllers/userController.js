export const handleGetRoot = async (req, res) => {
  res.status(200).json({
    code: 200,
    status: "OK",
    msg: "Management API For SNB Validation is Ready",
  });
};
