const { Laporan } = require('../../db/models');
const flash = require('connect-flash');

module.exports = {
    
    view: async(req, res, next) => {
        res.render('pages/laporan');
    },
    create: async(req, res, next) => {
        try {
            const { name, type, field} = req.body;

            const laporan = await Laporan.create({
                name,
                type,
                field
            });

            return res.render('pages/laporan',{message:'Laporan dibuat'});

            return res.status(200).json({
                status: true,
                message: 'Laporan berhasil dibuat',
                data: laporan
            })
        } catch(err) {
            next(err);
        }
     }
}