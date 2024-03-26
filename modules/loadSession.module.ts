import ig from './craetClient.module'
import * as path from 'path';
import * as fs from 'fs';

async function loadSession() {
    ig.state.generateDevice('mmdvafh');
    const sessionPath: string = path.resolve(__dirname, 'session.json');
    if (fs.existsSync(sessionPath)) {
        const session: string = fs.readFileSync(sessionPath, { encoding: 'utf8' });
        const client: void = await ig.state.deserialize(session);
        return client
    }
}

export default loadSession;