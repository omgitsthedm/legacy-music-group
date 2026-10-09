export interface ContactBrief { name: string; email: string; service: string; message: string }
export const topics: Readonly<Record<string, string>> = {
  websites: 'A website', 'it-support': 'A technology problem', consulting: 'A free second opinion', 'business-systems': 'Software or a workflow', unsure: 'Not sure yet',
};
export function buildEmailDraft(input: ContactBrief) {
  const name = input.name.trim().replace(/[\r\n]/g, ' ');
  const email = input.email.trim();
  const message = input.message.trim();
  if (!name || name.length > 100 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || !message || message.length > 1200) {
    throw new Error('Add your name, a valid email and a short description (up to 1,200 characters).');
  }
  const topic = Object.hasOwn(topics, input.service) ? topics[input.service] : topics.unsure;
  const subject = `Little Fight NYC — ${topic}`;
  const body = `Hi Little Fight,\n\n${message}\n\nI'm interested in: ${topic}\n\n${name}\n${email}`;
  const href = `mailto:hello@littlefightnyc.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return { subject, body, href };
}
