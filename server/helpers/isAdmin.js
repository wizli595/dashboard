const admin = require("../database/schemas/adminSchema");
async function isAdmin(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.status(403).send({ error: "Not authenticated!" });
  }

  const adminUser = await admin.findById(req.user.id);
  if (adminUser) {
    next();
  } else {
    res.status(403).send({ error: "Access Denied: Admins only!" });
  }
}
module.exports = isAdmin;
