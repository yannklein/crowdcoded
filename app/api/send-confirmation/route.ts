import { postDonation } from '@/utils/postDonation';
import sendgrid from '@sendgrid/mail';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { to, name, amount, projectId, projectName } = {
    to: req.nextUrl.searchParams.get('to'),
    name: req.nextUrl.searchParams.get('name'),
    amount: req.nextUrl.searchParams.get('amount'),
    projectId: req.nextUrl.searchParams.get('projectId'),
    projectName: req.nextUrl.searchParams.get('projectName')
  };

  const htmlContent = `
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet">
    <div style="font-family: sans-serif; font-size: 20px;">
      <div style="display: flex; align-items: center; gap: 16px; font-family: Bebas Neue, sans-serif; margin: 16px 8px" >
      <img height="80" src="https://www.crowdcoded.org/logo.png" alt="crowd coded logo">
      <h1>CROWD CODED</h1>
    </div>
    <p>Hi ${name ? name : "there"},</p>
    <p>
      Thank you for support ${projectName} project with your donation of ${amount}!<br/>
      You can now check your positive impact on the <a style="text-decoration: none; color: #55A9BB" href="https://www.crowdcoded.org/en/projects/${projectId}">project funding status<a/> on our website.<br/>
      Best regards,
    </p>
    <p>Yann and Adriana from <a style="text-decoration: none; color: #55A9BB" href="https://www.crowdcoded.org/">Crowd Coded</a></p>
    </div>
  `;

  const msg = {
    to: to,
    from: 'yann.klein@me.com',
    subject: `Your funding of ${amount} has been received!`,
    html: htmlContent
  };

  sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

  try {

    // create donation in the DB
    const donation = await postDonation({ 
      amount: parseInt(amount), 
      email: to, 
      name: name, 
      projectId: projectId, 
    });
    console.log(donation);
    

    // send e-mail (only in production)
    if (process.env.NODE_ENV === 'production') {
      await sendgrid.send(msg);
    } else {
      console.log("Message sent! (actual e-mailing disabled in development)", msg);
    }

    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/payment-success?amount=${amount}&to=${to}&name=${name}`
    );
  } catch (error) {
    return NextResponse.redirect(
      `${process.env.NEXT_PUBLIC_WEBSITE_URL}/payment-success?amount=${amount}&to=${to}&name=${name}&error=${error.message}`
    );
  }
}
