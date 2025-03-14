export const getUserForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filterdUsers = await User.find({
      id: { $ne: loggedInUserId },
    }).select("-password");
    res.status(200).json(filterdUsers);
  } catch (e) {
    console.log("error in getUserForSidebar", e.message);
    res.status(500).json({ message: "something went wrong" });
  }
};
