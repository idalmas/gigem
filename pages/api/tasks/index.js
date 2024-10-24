import dbConnect from '../../../lib/dbConnect';
import Task from '../../../models/Task';
import { authMiddleware } from '../../../lib/auth';

export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      try {
        const tasks = await Task.find({ status: 'open' });
        res.status(200).json(tasks);
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const user = await authMiddleware(req, res);
        if (user.role !== 'buyer') {
          return res.status(403).json({ message: 'Only buyers can create tasks' });
        }
        const task = await Task.create({ ...req.body, createdBy: user._id });
        res.status(201).json({ success: true, data: task });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
