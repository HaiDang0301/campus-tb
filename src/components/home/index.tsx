import { AboutUsSection } from "./about-us/about-us";
import { BannerSection } from "./banner";
import { BannerListSection } from "./banner-list";
import { ContactSection } from "./contact-section";
import { FeaturedProducts } from "./featured-products";
import { NewSection } from "./new-section";
import { NumberTalk } from "./numbers-talk";
import { QuoteRequestSection } from "./register-pricing";
import { SaleProductSection } from "./sale-product-section";

export const Home = () => {
  return (
    <>
      <BannerSection />
      <FeaturedProducts />
      <AboutUsSection />
      <SaleProductSection />
      <NumberTalk />
      <BannerListSection />
      <ContactSection />
      <NewSection />
      <QuoteRequestSection />
    </>
  );
};
