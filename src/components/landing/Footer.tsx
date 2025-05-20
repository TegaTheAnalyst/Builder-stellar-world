import { Facebook, Twitter, Instagram, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-16 sm:py-24 lg:px-8">
        <nav
          className="mb-12 columns-2 sm:flex sm:justify-center sm:space-x-12 md:columns-3"
          aria-label="Footer"
        >
          <div className="pb-6">
            <h3 className="font-semibold text-foreground">Product</h3>
            <ul role="list" className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul role="list" className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul role="list" className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  Partners
                </a>
              </li>
            </ul>
          </div>
          <div className="pb-6">
            <h3 className="font-semibold text-foreground">Legal</h3>
            <ul role="list" className="mt-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm leading-6 text-muted-foreground hover:text-foreground"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="mt-8 flex justify-center space-x-8">
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-muted-foreground">
          &copy; 2023 WorkflowPro, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
