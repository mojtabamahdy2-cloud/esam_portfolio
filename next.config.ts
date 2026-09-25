import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  transpilePackages: [
    'three',
    '@react-three/fiber',
    '@react-three/drei',
    '@react-three/postprocessing',
    'maath',
  ],
};

export default withNextIntl(nextConfig);
