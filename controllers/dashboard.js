module.exports = {
  dashboardView: (req, res) => {
    res.render('dashboard', { name: req.user.name });
  }
}
