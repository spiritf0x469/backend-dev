import {Router} from 'express';
import { delpost,updatepost,getposts,createpost } from '../controller/post.constroller.js';
const router=Router();
router.route('/create').post(createpost);
router.route('/getposts').get(getposts);
router.route('/update/:id').patch(updatepost);
router.route('/delete/:id').delete(delpost);
export default router;