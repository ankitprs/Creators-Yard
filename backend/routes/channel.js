import express from 'express';
import ChannelController from '../controllers/channel.controller.js'
import { auth, isEditor, isOwner, isPremium } from '../middlewares/index.js';


var router = express.Router();

router.post('/oauth2_url', auth, isPremium, ChannelController.getOauth2Url)
router.post('/create', auth, isPremium, ChannelController.createChannel);

router.post('/add_editors', auth, isOwner, ChannelController.addEditorFromChannel);
router.post('/remove_editors', auth, isOwner, ChannelController.removeEditorFromChannel);

router.get('/list_editors', auth, isOwner, ChannelController.getListOfEditors);
router.get('/list_channels', auth, ChannelController.getChannelForUser);

router.get('/owner_email_id', auth, isEditor, function (req, res) {
  res.render('index', { title: 'yes' });
});

router.post('/publish', auth, isOwner, ChannelController.publishVideo);


export default router;
