import express from 'express';
const router = express.Router();
export default router;

// instantiate an object of type clothing controller
import { DisplayAddPage, DisplayCompetitorListPage, DisplayEditPage } from '../Controllers/competitor';

// Display the Clothing-List Page
router.get('/', DisplayCompetitorListPage); // default route

// Display the Edit page by id
router.get('/edit/:id', DisplayEditPage);

// Display the Add page
router.get('/edit', DisplayAddPage);