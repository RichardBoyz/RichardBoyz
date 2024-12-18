import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg/,
      use: [
        {
          loader: "@svgr/webpack",
          options: { icon: true },
        },
      ],
    });

    return config;
  },
  env: {
    NEXT_PUBLIC_GA_MEASUREMENT_ID: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  },
};

export default withNextIntl(nextConfig);
