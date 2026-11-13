const http = require('http');

function postChat(message, schemeId) {
  return new Promise((resolve, reject) => {
    const payload = JSON.stringify({ message, schemeId });
    const req = http.request('http://localhost:8095/api/guide/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(payload)
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(JSON.parse(data)));
    });
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

async function testChatbot() {
  const tests = [
    { title: 'Test 1: What is this scheme about? (with PM-JAY)', q: 'What is this scheme about?', scheme: 'pm-jay' },
    { title: 'Test 2: Who can apply? (with PM-JAY)', q: 'Who can apply?', scheme: 'pm-jay' },
    { title: 'Test 3: What documents are required? (with PM-JAY)', q: 'What documents are required?', scheme: 'pm-jay' },
    { title: 'Test 4: How do I apply? (with Gruha Lakshmi)', q: 'How do I apply?', scheme: 'karnataka-gruha-lakshmi' },
    { title: 'Test 5: What are the benefits? (with Yuva Nidhi)', q: 'What are the benefits?', scheme: 'karnataka-yuva-nidhi' },
    { title: 'Test 6: Is this scheme available in Karnataka? (with PM-JAY)', q: 'Is this scheme available in Karnataka?', scheme: 'pm-jay' },
    { title: 'Test 6B: Is this scheme available in Karnataka? (with Ladki Bahin - MH)', q: 'Is this scheme available in Karnataka?', scheme: 'mh-ladki-bahin' },
    { title: 'Test 7: What if my application is rejected? (with PM-JAY)', q: 'What happens if my application gets rejected?', scheme: 'pm-jay' },
    { title: 'Test 8: Tell me about healthcare schemes (no scheme open)', q: 'Tell me about healthcare schemes', scheme: null },
    { title: 'Test 9: Find food security schemes (no scheme open)', q: 'Find food security schemes', scheme: null },
    { title: 'Test 10: Explain this scheme in simple English (with PMGKAY)', q: 'Explain this scheme in simple English.', scheme: 'pmgkay' }
  ];

  for (const t of tests) {
    console.log('========================================');
    console.log(t.title);
    const res = await postChat(t.q, t.scheme);
    console.log('Source:', res.source);
    console.log('Reply:\n' + res.reply);
    console.log('\n');
  }
}

testChatbot().catch(console.error);

