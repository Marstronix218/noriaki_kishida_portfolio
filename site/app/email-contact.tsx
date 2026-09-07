'use client';

import { useState } from 'react';

const email = 'noriaki@uni.minerva.edu';

export default function EmailContact() {
  const [status, setStatus] = useState('');

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus('Email copied.');
    } catch {
      setStatus('Select the email address to copy, or click it to send a message.');
    }
  }

  return (
    <div className="email-contact">
      <div className="email-row"><a href={`mailto:${email}`}>{email}</a><button type="button" onClick={copyEmail} aria-label="Copy email address" title="Copy email address"><span aria-hidden="true">⧉</span></button></div>
      <p className="copy-status" role="status" aria-live="polite">{status}</p>
    </div>
  );
}
