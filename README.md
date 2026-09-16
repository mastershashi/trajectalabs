# TrajectaLabs static website

This is a no-build static website. It can be deployed directly to Cloudflare Pages.

## Deploy on Cloudflare Pages

1. Push this folder to a GitHub or GitLab repository.
2. In Cloudflare, open **Workers & Pages** and create a Pages project from that repository.
3. Select **No framework**. Leave the build command empty and set the output directory to `/` (the repository root).
4. Add `trajectalabs.com` under **Custom domains**. Cloudflare will configure the DNS record for the domain.

The contact form sends the visitor's `name`, `email`, `phone`, and `enquiry` fields to `trajectalabs.official@gmail.com` using the activated FormSubmit endpoint. The endpoint is tied to this inbox, so do not replace it with the public email address unless FormSubmit generates a new activation token. Click **Activate Form** in the verification email once, then future submissions will be forwarded automatically. This keeps the first launch serverless; the form provider can later be replaced with a Cloudflare Worker or a full CRM integration.

Before launch, confirm that the phone number, location details, course schedules and fees are final. The site currently labels unfinished account features and future content clearly.