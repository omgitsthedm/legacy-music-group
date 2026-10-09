import test from 'node:test';
import assert from 'node:assert/strict';
import { buildEmailDraft } from '../src/lib/contact.ts';

const brief = { name: 'Alex Artist', email: 'alex@example.com', service: 'recording', message: 'Help with our recording & booking.' };
test('contact brief produces a correctly encoded email without delivery', () => {
  const draft = buildEmailDraft(brief);
  const url = new URL(draft.href);
  assert.equal(url.protocol, 'mailto:');
  assert.equal(url.pathname, 'info@legacymusicgroup.com');
  assert.equal(url.searchParams.get('body'), draft.body);
  assert.match(draft.body, /recording & booking/);
  assert.match(draft.subject, /A recording session/);
});
test('contact validation rejects missing fields, invalid addresses and oversized messages', () => {
  for (const fields of [{ name: ' ' }, { email: 'broken' }, { email: 'a@example.com\nBcc:x@example.com' }, { message: ' ' }, { message: 'x'.repeat(1201) }]) {
    assert.throws(() => buildEmailDraft({ ...brief, ...fields }));
  }
});
test('untrusted topic and newlines cannot inject email headers', () => {
  const draft = buildEmailDraft({ ...brief, name: 'Alex\r\nBcc: victim@example.com', service: 'unknown&bcc=victim@example.com' });
  assert.match(draft.subject, /Not sure yet/);
  const params = new URL(draft.href).searchParams;
  assert.deepEqual([...params.keys()], ['subject', 'body']);
  assert.match(draft.body, /Alex {2}Bcc/);
  assert.match(buildEmailDraft({ ...brief, service: '__proto__' }).subject, /Not sure yet/);
});
