const { Permohonan } = require('../../db/models');

module.exports = {
    view: async(req, res, next) => {
        return res.render('pages/permohonan');
    },
    create: async(req, res, next) => {
        try {
            const { name, type, necessity } = req.body;

            const permohonan = await Permohonan.create({
                name,
                type,
                necessity
            });

            return res.render('pages/permohonan');

            return res.status(201).json({
                status: true,
                message: "Permohonan Berhasil Dibuat",
                data: [
                    name,
                    type,
                    necessity
                ]
            });
        } catch(err) {
            next(err);
        }
    }
}