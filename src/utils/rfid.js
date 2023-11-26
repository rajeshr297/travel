const { LLRPCore, LLRPClient } = require('llrpjs');

const reader = new LLRPClient({ host: '192.168.7.2', port: 5084 });

// print RFID tags
reader.on('RO_ACCESS_REPORT', (msg) => {
  let tagReportDataList = msg.getTagReportData();
  if (!Array.isArray(tagReportDataList)) {
    tagReportDataList = [tagReportDataList];
  }
  for (const tagReportData of tagReportDataList) {
    const epc = tagReportData.getEPCParameter();
    console.log(`EPC: ${epc.getEPC()}`);
  }
});
reader.on('READER_EVENT_NOTIFICATION', (msg) => {
  console.log(msg);
  const Antenna = msg.getReaderEventNotificationData().getAntennaEvent().getEventType();
  console.log(Antenna);
});

reader.on('error', (err) => {
  // handle errors
});
reader.on('connect', () => {
  console.log('connected');
});
reader.on('disconnect', () => {
  console.log('disconnected');
});

const checkConnectionStatus = async () => {
  const msg = await reader.recv(7000);
  if (!(msg instanceof LLRPCore.READER_EVENT_NOTIFICATION)) {
    throw new Error(
      `connection status check failed - unexpected message ${msg.getName()}`,
    );
  }
  const status = msg
    .getReaderEventNotificationData()
    .getConnectionAttemptEvent()
    ?.getStatus();
  if (status !== 'Success') {
    throw new Error(`connection status check failed ${status}`);
  }
};
(async () => {
  try {
    // connect to reader
    await reader.connect();
    // wait for connection confirmation
    await checkConnectionStatus();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();

process.on('SIGINT', async () => {
  // request termination
  const rsp = await reader.transact(new LLRPCore.CLOSE_CONNECTION());
  if (rsp instanceof LLRPCore.CLOSE_CONNECTION_RESPONSE) {
    const status = rsp.getLLRPStatus();
    console.log(`${status.getErrorDescription()} - ${status.getStatusCode()}`);
  }
  // make sure it's disconnected
  if (reader.socketWritable) await reader.disconnect();
});
