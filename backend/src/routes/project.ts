import express from 'express';
import { getProjectList, createProject, closeProject } from '../controllers/project.controller'
import { auth, isEditor, isOwner } from '../middlewares';
import { Request, Response } from 'express';


const router = express.Router();


router.get('/add_project', auth, isEditor, function (req, res) {
  res.send({ isPremium: true });
});

router.get('/get_projects', async (req: Request, res: Response) => {
  try {
    const { email_id, channel_id } = req.params;
    // const newUser = await createUser(email_id)

    // res.status(201).json(newUser);

  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
})

router.delete('/close_project', auth, isOwner, async (req: Request, res: Response) => {
  try {
    const { email_id } = req.headers;
    // const user = await getUser(email_id as string)

    // res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
})

export default router;
