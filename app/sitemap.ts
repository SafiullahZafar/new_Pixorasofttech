import type { MetadataRoute } from 'next';
import { serviceDetails } from '@/lib/service-details';
import { projectCaseStudyRoutes, projects } from '@/lib/projects';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pixorasofttech.com';

  const corePages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/team`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/insights`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/software-company-faisalabad`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/laravel-flutter-development-pakistan`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceDetails.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const caseStudyPages = projects.reduce<MetadataRoute.Sitemap>((pages, project) => {
    const route = projectCaseStudyRoutes[project.id];
    if (!route) return pages;

    pages.push({
      url: `${baseUrl}${route}`,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
    return pages;
  }, []);

  return [...corePages, ...servicePages, ...caseStudyPages];
}
