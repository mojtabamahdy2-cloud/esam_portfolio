import { NextResponse } from 'next/server';
import { z } from 'zod';
const contactSchema = z.object({
  name: z.string().min(2, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(3000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: result.error.format() },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;
    
    // Forward the data to n8n webhook
    const n8nResponse = await fetch('https://n8n.srv1587679.hstgr.cloud/webhook/portfolio-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        message,
        source: 'Portfolio Contact Form'
      }),
    });

    if (!n8nResponse.ok) {
      console.error(`n8n webhook error: ${n8nResponse.status} ${n8nResponse.statusText}`);
      throw new Error('Failed to forward to webhook');
    }

    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Internal server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
