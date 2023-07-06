import { NextSeo } from "next-seo";
import Container from "../components/Container/Container";
import PageWrapper from "../components/PageWrapper/PageWrapper";

export default function docs() {
  return (
    <>
      <NextSeo
        title="ZENCON Launchpad | Incoming next"
        description="List of the complete documentation for ZENIQ and ZENCON launchpad to developers, Investors and community."
      />
      <PageWrapper>
        <section id='coming-soon' className="text-white bg-gray-900 bg-no-repeat bg-cover grow py-14 h-min-screen">
          <Container>
            <h1 className="pt-20 mt-20 mb-8 font-extrabold text-center text-7xl font-primary">
              Coming Soon
            </h1>
              <p className="sm:text-[20px] text-[18px]font-secondary text-center text-gray-400 mb-8 md:text-[20px] mt-6">
                Stay tuned on our official communication channels below to be up to date with the latest announcements.
            </p>
          </Container>
        </section>
      </PageWrapper>
    </>
  );
}
