function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-8 text-neutral-600 text-sm">
        <div className="flex space-x-4">
          <a
            className="transition-all hover:text-neutral-800"
            href="/sitemap.xml"
            aria-label="Link to sitemap"
          >
            Sitemap
          </a>
          <a
            className="transition-all hover:text-neutral-800"
            href="mailto:aakashpatel25274@gmail.com"
            aria-label="Email Aakash Patel"
          >
            Contact
          </a>
        </div>
        <p className="mt-4 sm:mt-0">
          © 2021-2025 by Aakash Patel | All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
