import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";

export default function FooterSection() {
  return (
    <footer className="w-full bg-background ">
      <div className="mx-auto max-w-container">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold">NAF Brands</h3>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Product</h3>
              <a href="/" className="text-sm text-muted-foreground">
                stock
              </a>
              <a href="/" className="text-sm text-muted-foreground">
                featured products
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Company</h3>
              <a href="/" className="text-sm text-muted-foreground">
                About
              </a>
              <a href="/" className="text-sm text-muted-foreground">
                map
              </a>
              <a href="/" className="text-sm text-muted-foreground">
                Blog
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Contact</h3>
              <a href="/" className="text-sm text-muted-foreground">
                Discord
              </a>
              <a href="/" className="text-sm text-muted-foreground">
                Twitter
              </a>
              <a href="/" className="text-sm text-muted-foreground">
                Github
              </a>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div className="text-white text-center">
              © 2025 NAF Brands All rights reserved
            </div>
            <div className="flex items-center text-white gap-4">
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Service</a>
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
