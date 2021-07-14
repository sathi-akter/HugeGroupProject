"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisplayAddPage = exports.DisplayEditPage = exports.DisplayCompetitorListPage = void 0;
const competitor_1 = __importDefault(require("../Models/competitor"));
function DisplayCompetitorListPage(req, res, next) {
    competitor_1.default.find(function (err, competitorCollection) {
        if (err) {
            return console.error(err);
        }
        res.render('index', { title: 'Competitor List', page: 'competitor-list', competitor: competitorCollection });
    });
}
exports.DisplayCompetitorListPage = DisplayCompetitorListPage;
function DisplayEditPage(req, res, next) {
    let id = req.params.id;
    console.log(id);
    competitor_1.default.findById(id, {}, {}, (err, competitorItemToEdit) => {
        if (err) {
            console.error(err);
            res.end(err);
        }
        res.render('index', { title: 'Edit', page: 'edit', competitor: competitorItemToEdit });
    });
}
exports.DisplayEditPage = DisplayEditPage;
function DisplayAddPage(req, res, next) {
    res.render('index', { title: 'Add', page: 'edit', competitor: '' });
}
exports.DisplayAddPage = DisplayAddPage;
//# sourceMappingURL=competitor.js.map