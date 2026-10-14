import Link from 'next/link';
import { generateMetadata } from '@/src/utils/generateMetaData';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  ...generateMetadata('Forgot password - eComSmiths'),
};

/** Placeholder until a dedicated reset flow exists. */
const Page = () => {
  return (
    <section className="bg-background-8 py-32 text-center" aria-labelledby="forgot-heading">
      <div className="main-container">
        <h1 id="forgot-heading" className="text-sora-heading-4 text-background-13 mb-4 font-sora font-normal">
          Forgot password
        </h1>
        <p className="text-tagline-2 text-background-13/60">
          Password reset is coming soon.{' '}
          <Link href="/login" className="font-medium text-background-13/90 underline underline-offset-2">
            Back to login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Page;
