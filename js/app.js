// replace these values with those generated in your TokBox Account
var apiKey = "47084694";
var sessionId = "1_MX40NzA4NDY5NH5-MTYxMDgzNDExNDg3NH5EZDhvSHN1bysvZ2l1OW9LcExrMllIaCt-fg";
var token = "T1==cGFydG5lcl9pZD00NzA4NDY5NCZzaWc9OTEzMzljZGYxNGVhYjc3ZmM1ZjI4NWMyNGY1Mzg2ZTA4NWE4YmU5YzpzZXNzaW9uX2lkPTFfTVg0ME56QTRORFk1Tkg1LU1UWXhNRGd6TkRFeE5EZzNOSDVFWkRodlNITjFieXN2WjJsMU9XOUxjRXhyTWxsSWFDdC1mZyZjcmVhdGVfdGltZT0xNjEwODM0MTM4Jm5vbmNlPTAuNjAwMTUwMTk0MDAxOTcyNyZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjEwOTIwNTM3JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

// (optional) add server code here
initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
    if (error) {
      alert(error.message);
    }
  }
  
  function initializeSession() {
    var session = OT.initSession(apiKey, sessionId);
  
    // Subscribe to a newly created stream
    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'subscriber', {
          insertMode: 'append',
          width: '100%',
          height: '100%'
        }, handleError);
      });
  
    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  
    // Connect to the session
    session.connect(token, function(error) {
      // If the connection is successful, publish to the session
      if (error) {
        handleError(error);
      } else {
        session.publish(publisher, handleError);
      }
    });
  }