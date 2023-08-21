import type { MDXComponents } from 'mdx/types';
import { H } from './src/app/shared/H';
import { Link } from '@/app/shared/Link';
 
// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.
 
// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    a: Link,
    h2: H(2),
    h3: H(3),
    h4: H(4),
    h5: H(5),
    h6: H(6),
    ...components,
  }
}

