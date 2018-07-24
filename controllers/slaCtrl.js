var SlaModel = require("./../models/slaModel.js");

module.exports = {
    read: function(req, res) {
        SlaModel
            .find(req.query)
            .populate('app')
            .exec(function(err, result) {
                if (err) {
                    res.send(err);
                } else {
                    res.send(result);
                }
            });
    },
    create: function(req, res) {
        var pwa = new SlaModel(req.body);
        pwa.save(function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    },
    change: function(req, res) {
        SlaModel
            .findByIdAndUpdate(req.params.id, req.body,
                function(err, result) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(result);
                    }
                });
    },
    destroy: function(req, res) {
        SlaModel
            .findByIdAndRemove(req.params.id, req.body,
                function(err, result) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(result);
                    }
                });
    }
};
