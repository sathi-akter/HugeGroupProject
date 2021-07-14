import express, { Request, Response, NextFunction } from 'express';

// Clothing Model
import Competitor from '../Models/competitor';

// display page functions
export function DisplayCompetitorListPage(req: Request, res: Response, next: NextFunction): void
{
    // db.clothing.find()
    Competitor.find(function(err, competitorCollection){
        if(err)
        {
            return console.error(err);
        }

        res.render('index', {title: 'Competitor List', page: 'competitor-list', competitor: competitorCollection});
    });
}

export function DisplayEditPage(req: Request, res: Response, next: NextFunction): void
{
    let id = req.params.id;

    console.log(id);

    Competitor.findById(id, {}, {}, (err, competitorItemToEdit) => 
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        // show the edit page

        res.render('index', {title: 'Edit', page: 'edit', competitor: competitorItemToEdit});
    });
}

export function DisplayAddPage(req: Request, res: Response, next: NextFunction): void
{
        res.render('index', {title: 'Add', page: 'edit', competitor: ''});
}
