# CodeStitch Development Toolkit & Template Guidelines

This document serves as the definitive template and toolkit for all CodeStitch projects. All suggested changes and implementations MUST strictly adhere to these conventions to maintain consistency across the project ecosystem.

## Project Structure

-   Use a consistent file organization system
-   Keep HTML, CSS, and JavaScript files separate
-   Maintain a clear directory structure for assets
-   Follow semantic HTML5 structure
-   Use proper indentation and spacing
-   Implement consistent padding (100px top and bottom on desktop)
-   Maintain uniform content block structure
-   Use consistent container sizes (1280px standard, up to 1440px for specific sections)
-   Follow framework-free approach using pure HTML and CSS
-   Ensure components integrate seamlessly when combined

## CSS/SASS Best Practices

-   Use CSS variables for consistent theming
-   Implement responsive design using media queries
-   Follow BEM naming convention
-   Use clamp() for fluid typography and spacing
-   Maintain consistent spacing units (rem/em)
-   Follow 4pt design system for uniform spacing
-   Use unique IDs for each component to scope CSS and prevent interference
-   Keep CSS selectors specific and maintainable
-   Use flexbox and grid for layouts
-   Implement dark mode using CSS variables
-   Use proper aspect ratios for images
-   Implement proper margin and padding clamps
-   Use flex: none to prevent unwanted element squishing
-   Group media queries for each component for easy navigation

## HTML Structure

-   Use semantic HTML5 elements
-   Include proper meta tags
-   Implement proper heading hierarchy
-   Use descriptive alt text for images
-   Include proper ARIA labels
-   Maintain consistent container sizes
-   Use picture element for responsive images
-   Implement proper image loading attributes (loading="lazy", decoding="async")
-   Use proper width and height attributes for images

## Navigation

-   Implement responsive navigation
-   Use proper ARIA labels for accessibility
-   Include proper focus states
-   Maintain consistent navigation structure
-   Use proper semantic markup for navigation elements
-   Position dark mode toggle properly (top right on mobile, next to main nav on desktop)
-   Implement proper mobile menu functionality

## Performance

-   Optimize images for web
-   Use lazy loading for images
-   Implement proper caching strategies
-   Minimize CSS and JavaScript
-   Use proper image formats (WebP)
-   Implement proper image sizing
-   Use proper image compression
-   Make image crops 2x the display size
-   Use proper image aspect ratios
-   Implement proper image loading attributes

## Accessibility

-   Include proper ARIA labels
-   Maintain proper color contrast
-   Use proper heading hierarchy
-   Include proper alt text
-   Implement keyboard navigation
-   Use proper focus states
-   Include proper form labels
-   Use proper semantic HTML elements
-   Implement proper screen reader support

## SEO

-   Use proper meta tags
-   Implement proper heading hierarchy
-   Use descriptive alt text
-   Include proper schema markup
-   Maintain proper URL structure
-   Use proper canonical tags
-   Implement proper sitemap
-   Use proper semantic HTML structure
-   Implement proper robots.txt

## Image Handling

-   Use picture element for responsive images
-   Implement proper image optimization
-   Use proper image formats
-   Include proper alt text
-   Implement lazy loading
-   Use proper image compression
-   Maintain proper aspect ratios
-   Make proper image crops (2x display size)
-   Use proper image loading attributes
-   Implement proper image fallbacks

## Dark Mode Implementation

-   Use CSS variables for theming
-   Implement proper toggle functionality
-   Maintain proper color contrast
-   Use proper transition effects
-   Include proper fallbacks
-   Maintain consistent styling
-   Position toggle properly in navigation
-   Implement proper dark mode class handling
-   Use proper dark mode image variants

## Container Sizes

-   Use consistent container widths (1280px standard)
-   Implement proper responsive breakpoints
-   Use clamp() for fluid sizing
-   Maintain proper spacing
-   Use proper max-width values
-   Implement proper padding/margins
-   Allow for larger containers (up to 1440px) for specific sections
-   Use proper container growth patterns
-   Implement proper margin clamps

## Stitch Variations

-   Maintain consistent design patterns
-   Use proper component structure
-   Implement proper responsive behavior
-   Maintain proper spacing
-   Use proper naming conventions
-   Include proper documentation
-   Create variations for different content needs
-   Implement proper reverse pairs and triplets
-   Use proper component organization
-   Ensure components blend seamlessly when combined
-   Use unique component IDs to prevent CSS interference
-   Design components to be easily editable and customizable

## Personal Component Library

-   Create proper sections and categories
-   Use proper naming conventions
-   Include proper documentation
-   Implement proper code organization
-   Use proper image handling
-   Include proper tags for searching
-   Maintain proper version control
-   Implement proper code reuse
-   Use proper component structure
