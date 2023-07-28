import express from 'express'
import { ENVIRONMENT_VARIABLES } from './config/config'
import updateStock from './utils/schedules/updateStock';
const app = express()

const { PORT } = ENVIRONMENT_VARIABLES

app.use(express.json());

app.get('/ping', (_, res) => {
  updateStock()
    .then((token) => {
      return res.status(200).json({ token });
    })
    .catch(() => {
      console.log('ERROR EN EL ENDPOINT');
    })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});
