import { scheduleJob } from 'node-schedule';

const runningProcesses: Set<string> = new Set();

async function runSchedule (name: string, func: Function): Promise<void> {
  if (runningProcesses.has(name)) return undefined;
  runningProcesses.add(name);
  return func()
    .then(() => {
      runningProcesses.delete(name);
    })
    .catch(() => {
      return undefined;
    });
};

export async function initSchedule (): Promise<void> {
  try {
    scheduleJob('0 0 * * *', async () => {
      return runSchedule('updateStock', updateStock);
    })
  } catch (err) {
    console.error(`ERROR EN LOS SCHEDULES --> ${JSON.stringify(err)}`);
  }
};
