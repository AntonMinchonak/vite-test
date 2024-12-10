import { parse } from 'csv-parse/sync';

const PluginCsv = () => ({
  name: 'vite:csv',
  transform(src, id) {
    if (/\.csv$/.test(id)) {
      const records = parse(src, { columns: true });

      console.log(src, id, records);

      return {
        code: `export default ${JSON.stringify(records)}`,
      };
    }
  },
  configureServer(server) {
    server.ws.on('connection', () => {
      server.ws.send('connected', 'connected lol');
    });

    server.ws.on('ping', (data) => {
      console.log(data);
      server.ws.send('pong', { ...data, jopa: 'lol' });
    });

    server.ws.on('suka', (data) => {
      console.log('suka', data);
      server.ws.send('suka1', data);
    });
  },
  async handleHotUpdate(context) {
    if (/\.csv$/.test(context.file)) {
      context.server.ws.send({
        type: 'custom',
        event: 'csv-update',
        data: {
          url: context.file,
          url2: context.modules[0].url,
          data: parse(await context.read(), { columns: true }),
        },
      });

      return [];
    }
  },
});

export default PluginCsv;
